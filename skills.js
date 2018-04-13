const JITTER_COMPENSATION	= false,
	JITTER_ADJUST			= 0,		//	This number is added to your detected minimum ping to get the compensation amount.
	SKILL_RETRY_COUNT		= 1,		//	Number of times to retry each skill (0 = disabled). Recommended 1-3.
	SKILL_RETRY_MS			= 80,		/*	Time to wait between each retry.
											SKILL_RETRY_MS * SKILL_RETRY_COUNT should be under 100, otherwise skills may go off twice.
										*/
	SKILL_RETRY_JITTERCOMP	= 20,		//	Skills that support retry will be sent this much earlier than estimated by jitter compensation.
	SKILL_RETRY_ALWAYS		= false,	//	Setting this to true will reduce ghosting for extremely short skills, but may cause other skills to fail.
	SKILL_DELAY_ON_FAIL		= true,		//	Basic initial desync compensation. Useless at low ping (<50ms).
	
	FORCE_CLIP_STRICT		= true,		/*	Set this to false for smoother, less accurate iframing near walls.
											Warning: Will cause occasional clipping through gates when disabled. Do NOT abuse this.
										*/
	DEFEND_SUCCESS_STRICT	= false,		//	Set this to false to see Brawler's Perfect Block icon at very high ping (warning: may crash client).
	DEBUG					= false,
	DEBUG_LOC				= false,
	DEBUG_PROJECTILE		= false,
	DEBUG_GLYPH				= false

const {protocol, sysmsg} = require('tera-data-parser'),
	Ping = require('./ping'),
	AbnormalityPrediction = require('./abnormalities'),
	silence = require('./config/silence').reduce((map, value) => { // Convert array to object for fast lookup
		map[value] = true
		return map
	}, {})

const INTERRUPT_TYPES = {
	'nullChain': 4,
	'retaliate': 5,
	'lockonCast': 36
}

const Flags = {
	Player: 0x04000000,
	CC: 0x08000000
}

module.exports = function SkillPrediction(dispatch) {
	const ping = Ping(dispatch),
		abnormality = AbnormalityPrediction(dispatch)
	const Vec3 = require('tera-vec3')

	let sending = false,
		skillsCache = null,
		cid = null,
		model = 0,
		race = -1,
		job = -1,
		level = 0,
		vehicleEx = null,
		aspd = 1,
		currentGlyphs = null,
		currentStamina = 0,
		alive = false,
		inCombat = false,
		inventoryHook = null,
		inventory = null,
		equippedWeapon = false,
		partyMembers = null,
		delayNext = 0,
		delayNextTimeout = null,
		actionNumber = 0x80000000,
		currentLocation = null,
		lastStartTime = 0,
		lastStartLocation = null,
		lastEndLocation = null,
		oopsLocation = null,
		currentAction = null,
		serverAction = null,
		serverConfirmedAction = false,
		queuedNotifyLocation = [],
		lastEndSkill = 0,
		lastEndType = 0,
		lastEndedId = 0,
		serverTimeout = null,
		stageEnd = null,
		stageEndTime = 0,
		stageEndTimeout = null,
		debugActionTime = 0;
		
	let SERVER_TIMEOUT;
	
	let manaChargeSpeed = false;
	let burstFireCost = false;
	let inviRageCost = false;
	
	let canVB = false;
	let VBtimer = null;
	let delayVB = 0;
	
	let skills = dispatch.base.majorPatchVersion >= 67 ? require('./config/awakening') : require('./config/skills')

	dispatch.hook('S_LOGIN', dispatch.base.majorPatchVersion >= 67 ? 10 : 9, event => {
		skillsCache = {};
		cid = event.gameId;
		model = event.templateId;
		race = Math.floor((model - 10101) / 100)
		job = (model - 10101) % 100

		if(DEBUG) console.log('Race '+race+', Class '+ job);
		SERVER_TIMEOUT = 600;;
		if(job==3) SERVER_TIMEOUT = 2800;	// prevent charge skills from getting animation cancelled at client side
		if(job==5) SERVER_TIMEOUT = 2000;	// prevent charge skills from getting animation cancelled at client side
		hookInventory()
	})

	dispatch.hook('S_LOAD_TOPO', 3, event => {
		vehicleEx = null

		currentAction = null
		serverAction = null
		lastEndSkill = 0
		lastEndType = 0
		lastEndedId = 0
		sendActionEnd(37)
	})

	
	dispatch.hook('S_PLAYER_STAT_UPDATE', 8, event => {
		// Newer classes use a different speed algorithm
		aspd = (event.attackSpeed + event.attackSpeedBonus) / (job >= 8 ? 100 : event.attackSpeed)
		currentStamina = event.stamina
	})

	dispatch.hook('S_CREST_INFO', 1, event => {
		currentGlyphs = {}

		for(let glyph of event.glyphs)
			currentGlyphs[glyph.id] = glyph.enabled
	})

	dispatch.hook('S_CREST_APPLY', 1, event => {
		if(DEBUG_GLYPH) console.log('Glyph', event.id, event.enabled)

		currentGlyphs[event.id] = event.enabled
	})

	dispatch.hook('S_PLAYER_CHANGE_STAMINA', 1, event => { currentStamina = event.current })

	dispatch.hook('S_SPAWN_ME', 2, event => {
		updateLocation(event)
		alive = event.alive
	})

	dispatch.hook('S_CREATURE_LIFE', 2, event => {
		if(isMe(event.gameId)) {
			alive = event.alive

			if(!alive) {
				clearStage()
				oopsLocation = currentAction = serverAction = null
			}
		}
	})

	dispatch.hook('S_USER_STATUS', 1, event => {
		if(event.target.equals(cid)) {
			inCombat = event.status == 1

			if(!inCombat) hookInventory()
			else if(!inventory && inventoryHook) {
				dispatch.unhook(inventoryHook)
				inventoryHook = null
			}
		}
	})

	function hookInventory() {
		if(!inventoryHook) inventoryHook = dispatch.hook('S_INVEN', 12, event => {
			inventory = event.first ? event.items : inventory.concat(event.items)

			if(!event.more) {
				equippedWeapon = false
				manaChargeSpeed = false
				burstFireCost = false
				inviRageCost = false
				for(let item of inventory)
					if(item.slot == 1) {
						equippedWeapon = true
						break
					}
				for(let item of inventory)
					if(item.slot == 3) {
						let passivitySet = item.passivitySet
						let passivitySets = item.passivitySets[passivitySet]
						let entries = passivitySets.passivities
						for(let roll of entries) {
							if(roll.dbid == 350708) manaChargeSpeed = true
							if(roll.dbid == 350905) burstFireCost = true
							if(roll.dbid == 351009) inviRageCost = true
						}
						break
					}

				inventory = null

				if(inCombat) {
					dispatch.unhook(inventoryHook)
					inventoryHook = null
				}
			}
		})
	}

	dispatch.hook('S_PARTY_MEMBER_LIST', dispatch.base.majorPatchVersion >= 67 ? 6 : 5, event => {
		partyMembers = []
		
		for (let member of event.members)
            if (!((dispatch.base.majorPatchVersion >= 67 ? member.gameId : member.cid).equals(cid)))
                partyMembers.push(dispatch.base.majorPatchVersion >= 67 ? member.gameId : member.cid)
	})

	dispatch.hook('S_LEAVE_PARTY', () => { partyMembers = null })

	dispatch.hook('S_MOUNT_VEHICLE_EX', 1, event => {
		if(cid.equals(event.target)) vehicleEx = event.vehicle
	})

	dispatch.hook('S_UNMOUNT_VEHICLE_EX', 1, event => {
		if(cid.equals(event.target)) vehicleEx = null
	})

	dispatch.hook('C_PLAYER_LOCATION', 3, event => {
		if(DEBUG_LOC) console.log('Location %d %d (%d %d %d %s) > (%d %d %d)', event.type, event.unk2, Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z), degrees(event.w), Math.round(event.dest.x), Math.round(event.dest.y), Math.round(event.dest.z))

		if(currentAction) {
			let info = skillInfo(currentAction.skill)

			if(info && info.distance) return false
		}

		
		// This is not correct, but the midpoint location seems to be "close enough" for the client to not teleport the player
		updateLocation({loc: event.loc.addN(event.dest).scale(0.5), w: event.w})
	})

	dispatch.hook('C_NOTIFY_LOCATION_IN_ACTION', 2, notifyLocation.bind(null, 'C_NOTIFY_LOCATION_IN_ACTION', 2))
	dispatch.hook('C_NOTIFY_LOCATION_IN_DASH', 2, notifyLocation.bind(null, 'C_NOTIFY_LOCATION_IN_DASH', 2))

	function notifyLocation(type, version, event) {
		if(DEBUG_LOC) console.log('-> %s %s %d (%d %d %d %s)', type, skillId(event.skill), event.stage, Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z), degrees(event.w))

		updateLocation(event, true)

		let info = skillInfo(event.skill)
		// The server rejects and logs packets with an incorrect skill, so if a skill has multiple possible IDs then we wait for a response
		if(info && (info.chains || info.hasChains))
			if(serverConfirmedAction) {
				if(!serverAction) return false
				else if(event.skill !== serverAction.skill) {
					event.skill = serverAction.skill
					return true
				}
			}
			else {
				queuedNotifyLocation.push([type, version, event])
				return false
			}
	}

	function dequeueNotifyLocation(skill) {
		if(queuedNotifyLocation.length) {
			if(skill)
				for(let [type, version, event] of queuedNotifyLocation) {
					event.skill = skill
					dispatch.toServer(type, version, event)
				}

			queuedNotifyLocation = []
		}
	}

	for(let packet of [
			['C_START_SKILL', dispatch.base.majorPatchVersion >= 67 ? 5 : 4],
			['C_START_TARGETED_SKILL', 4],
			['C_START_COMBO_INSTANT_SKILL', 2],
			['C_START_INSTANCE_SKILL', 3],
			['C_START_INSTANCE_SKILL_EX', 3],
			['C_PRESS_SKILL', 2],
			['C_NOTIMELINE_SKILL', 1]
		])
		dispatch.hook(packet[0], 'raw', {order: -10, filter: {fake: null}}, startSkill.bind(null, ...packet))

	function startSkill(type, version, code, data) {
		if(sending) return

		let event = protocol.parse(dispatch.base.protocolVersion, type, version, data = Buffer.from(data)),
			info = skillInfo(event.skill),
			delay = 0

		if(delayNext && Date.now() <= stageEndTime) {
			delay = delayNext

			if(info && !info.noRetry && SKILL_RETRY_COUNT) {
				delay -= SKILL_RETRY_JITTERCOMP

				if(delay < 0) delay = 0
			}
		}

		if(DEBUG) {
			let strs = ['->', type, skillId(event.skill)]

			if(type == 'C_START_SKILL') strs.push(...[event.unk ? 1 : 0, event.moving ? 1 : 0, event.continue ? 1 : 0])
			if(type == 'C_PRESS_SKILL') strs.push(event.press)
			else if(type == 'C_START_TARGETED_SKILL') {
				let tmp = []

				for(let e of event.targets) tmp.push([e.id.toString(), e.unk].join(' '))

				strs.push('[' + tmp.join(', ') + ']')
			}

			if(DEBUG_LOC) {
				strs.push(...[degrees(event.w), '(' + Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z) + ')'])

				if(type == 'C_START_SKILL' || type == 'C_START_TARGETED_SKILL' || type == 'C_START_INSTANCE_SKILL_EX')
					strs.push(...['>', '(' + Math.round(event.dest.x), Math.round(event.dest.y), Math.round(event.dest.z) + ')'])
			}

			if(delay) strs.push('DELAY=' + delay)

			debug(strs.join(' '))
		}

		clearTimeout(delayNextTimeout)

		if(delay) {
			delayNextTimeout = setTimeout(handleStartSkill, delay, type, event, info, data, true)
			return false
		}

		return handleStartSkill(type, event, info, data)
	}

	function handleStartSkill(type, event, info, data, send) {
		serverConfirmedAction = false
		dequeueNotifyLocation()
		delayNext = 0

		let specialLoc = type == 'C_START_SKILL' || type == 'C_START_TARGETED_SKILL' || type == 'C_START_INSTANCE_SKILL_EX'

		if(!info) {
			if(type != 'C_PRESS_SKILL' || event.start)
				// Sometimes invalid (if this skill can't be used, but we have no way of knowing that)
				if(type != 'C_NOTIMELINE_SKILL') updateLocation(event, false, specialLoc)

			if(send) toServerLocked(data)
			return
		}

		let skill = event.skill,
			skillBase = Math.floor((skill - 0x4000000) / 10000),
			interruptType = 0

		if(!alive || abnormality.inMap(silence)) {
			sendCannotStartSkill(event.skill)
			return false
		}

		if(!equippedWeapon) {
			sendCannotStartSkill(event.skill)
			sendSystemMessage('SMT_BATTLE_SKILL_NEED_WEAPON')
			return false
		}
		
		if(type == 'C_PRESS_SKILL' && event.press && canVB && job == 3 && skillBase == 15){
			return false;
		}
		
		if(type == 'C_PRESS_SKILL' && !event.press && !(canVB && (job == 3 && skillBase == 15) ) ) {
			if((info.type == 'hold' || info.type == 'holdInfinite') && currentAction && currentAction.skill == skill) {
				updateLocation(event)

				if(info.chainOnRelease) {
					sendActionEnd(11)

					info = skillInfo(skill += info.chainOnRelease - ((skill - 0x4000000) % 100))
					if(!info) {
						if(send) toServerLocked(data)
						return
					}

					startAction({
						skill,
						info,
						stage: 0,
						speed: info.fixedSpeed || aspd * (info.speed || 1)
					})
				}
				else if(info.length) {
					let length = lastStartTime + info.length - Date.now()
					if(length > 0) {
						stageEnd = sendActionEnd.bind(null, 51, info.distance)
						stageEndTime = Date.now() + length
						stageEndTimeout = setTimeout(stageEnd, length)
					}
					else sendActionEnd(51)
				}
				else sendActionEnd(10)
			}

			if(send) toServerLocked(data)
			return
		}

		if(currentAction) {
			if(currentAction.skill & Flags.CC && (currentAction.skill & 0xffffff !== model * 100 + 2 || info.type !== 'retaliate')) {
				sendCannotStartSkill(event.skill)
 				return false
 			}
			let currentSkill = currentAction.skill - 0x4000000,
				currentSkillBase = Math.floor(currentSkill / 10000),
				currentSkillSub = currentSkill % 100
			

			// 6190XXXX = Pushback(?)
			if(currentSkillBase == 6190) {
				sendCannotStartSkill(event.skill)
				return false
			}
			
			// Some skills are bugged clientside and can interrupt the wrong skills, so they need to be flagged manually
			if(info.noInterrupt && (info.noInterrupt.includes(currentSkillBase) || info.noInterrupt.includes(currentSkillBase + '-' + currentSkillSub))) {
				let canInterrupt = false

				if(info.interruptibleWithAbnormal)
					for(let abnormal in info.interruptibleWithAbnormal)
						if(abnormality.exists(abnormal) && currentSkillBase == info.interruptibleWithAbnormal[abnormal])
							canInterrupt = true

				if(!canInterrupt) {
					sendCannotStartSkill(event.skill)
					return false
				}
			}

			let chain = get(info, 'chains', currentSkillBase + '-' + currentSkillSub) || get(info, 'chains', currentSkillBase)

			if(chain !== undefined) {
				if(chain === null) {
					updateLocation(event, false, specialLoc)
					sendActionEnd(4)
					if(send) toServerLocked(data)
					return
				}
				skill = modifyChain(skill, chain)
				interruptType = INTERRUPT_TYPES[info.type] || 4
			}
			else interruptType = INTERRUPT_TYPES[info.type] || 6
			
			
		}

		if(info.onlyDefenceSuccess)
			if(currentAction && currentAction.defendSuccess) interruptType = 3
			else {
				sendCannotStartSkill(event.skill)
				sendSystemMessage('SMT_SKILL_ONLY_DEFENCE_SUCCESS')
				return false
			}

		if(info.onlyTarget && event.targets[0].id.equals(0)) {
			sendCannotStartSkill(event.skill)
			return false
		}

		// Skill override (chain)
		if(skill != event.skill) {
			info = skillInfo(skill)
			if(!info) {
				if(type != 'C_NOTIMELINE_SKILL') updateLocation(event, false, specialLoc)

				if(send) toServerLocked(data)
				return
			}
		}

		// TODO: System Message
		if(info.requiredBuff) {
			if(Array.isArray(info.requiredBuff)) {
				let found = false

				for(let buff of info.requiredBuff)
					if(abnormality.exists(buff)) {
						found = true
						break
					}

				if(!found) {
					sendCannotStartSkill(event.skill)
					return false
				}
			}
			else if(!abnormality.exists(info.requiredBuff)) {
				sendCannotStartSkill(event.skill)
				return false
			}
		}

		if(type != 'C_NOTIMELINE_SKILL') updateLocation(event, false, specialLoc)
		lastStartLocation = currentLocation

		let abnormalSpeed = 1,
			chargeSpeed = 0,
			distanceMult = 1

		if(info.abnormals)
			for(let id in info.abnormals)
				if(abnormality.exists(id)) {
					let abnormal = info.abnormals[id]

					if(abnormal.speed) abnormalSpeed *= abnormal.speed
					if(abnormal.chargeSpeed) chargeSpeed += abnormal.chargeSpeed
					if(abnormal.chain) skill = modifyChain(skill, abnormal.chain)
					if(abnormal.skill) skill = 0x4000000 + abnormal.skill
				}

		// Skill override (abnormal)
		if(skill != event.skill) {
			info = skillInfo(skill)
			if(!info) {
				if(send) toServerLocked(data)
				return
			}
		}
		
		if(manaChargeSpeed) chargeSpeed += 0.15;

		if(interruptType) {
			info.type == 'chargeCast' ? clearStage() : sendActionEnd(interruptType)

			if(info.type == 'nullChain') {
				if(send) toServerLocked(data)
				return
			}
		}

		// Finish calculations and send the final skill
		let speed = info.fixedSpeed || aspd * (info.speed || 1) * abnormalSpeed,
			movement = null,
			stamina = info.stamina

		if(burstFireCost) stamina -= 5;	
		if(inviRageCost) stamina -= 600;
		
		if(info.glyphs)
			for(let id in info.glyphs)
				if(currentGlyphs[id]) {
					let glyph = info.glyphs[id]

					if(glyph.speed) speed *= glyph.speed
					if(glyph.chargeSpeed) chargeSpeed += glyph.chargeSpeed
					if(glyph.movement) movement = glyph.movement
					if(glyph.distance) distanceMult *= glyph.distance
					if(glyph.stamina) stamina += glyph.stamina
				}

		if(stamina) {
			if(currentStamina < stamina) {
				sendCannotStartSkill(event.skill)
				//dispatch.toClient('S_SYSTEM_MESSAGE', 1, { message: '@' + sysmsg.map.name['SMT_BATTLE_SKILL_FAIL_LOW_STAMINA'] })
				return false
			}

			if(info.instantStamina) currentStamina -= stamina
		}

		startAction({
			skill,
			info,
			stage: 0,
			speed,
			chargeSpeed,
			movement,
			moving: type == 'C_START_SKILL' && event.moving == 1,
			distanceMult,
			targetLoc: event.dest
		})
		
		delayVB = Math.round(500/1.1/speed);
		if(DEBUG && info.canVB) console.log('VB delay:'+delayVB);
		if(info.canVB) VBtimer = setTimeout(enableVB, delayVB);	// you need a delay before chaining into VB

		if(send) toServerLocked(data)

		// Normally the user can press the skill button again if it doesn't go off
		// However, once the animation starts this is no longer possible, so instead we simulate retrying each skill
		if(!info.noRetry)
			retry(() => {
				if((SKILL_RETRY_ALWAYS && type != 'C_PRESS_SKILL') || currentAction && currentAction.skill == skill) return toServerLocked(data)
				return false
			})
	}

	function toServerLocked(data) {
		sending = true
		let success = dispatch.toServer(data)
		sending = false

		return success
	}

	dispatch.hook('C_CANCEL_SKILL', 1, event => {
		if(DEBUG) debug(['-> C_CANCEL_SKILL', skillId(event.skill), event.type].join(' '))

		if(currentAction) {
			let info = skillInfo(currentAction.skill) // event.skill can be wrong, so use the known current skill instead
			if(info && info.type == 'lockon') sendActionEnd(event.type)
		}
	})

	dispatch.hook('S_ACTION_STAGE', 4, event => {
		if(isMe(event.gameId)) {
			if(DEBUG) {
				let duration = Date.now() - debugActionTime,
					strs = [skillInfo(event.skill) ? '<X' : '<-', 'S_ACTION_STAGE', skillId(event.skill), event.stage, decimal(event.speed, 3) + 'x']

				if(DEBUG_LOC) strs.push(...[degrees(event.w) + '\xb0', '(' + Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z) + ')'])

				strs.push(...[event.unk, event.unk1, event.dest.x, event.dest.y, event.dest.z, event.unk2, event.unk3])

				if(serverAction)
					strs.push(...[
						decimal(serverAction.loc.dist2D(event.loc), 3) + 'u',
						duration + 'ms',
						'(' + Math.round(duration * serverAction.speed) + 'ms)'
					])

				if(event.movement.length) {
					let movement = []

					for(let e of event.movement)
						movement.push(e.duration + ' ' + e.speed + ' ' + e.unk + ' ' + e.distance)

					strs.push('(' + movement.join(', ') + ')')
				}

				debug(strs.join(' '))
				debugActionTime = Date.now()
			}

			let info = skillInfo(event.skill)
			if(info) {
				if(currentAction && (event.skill == currentAction.skill || Math.floor((event.skill - 0x4000000) / 10000) == Math.floor((currentAction.skill - 0x4000000) / 10000)) && event.stage == currentAction.stage) {
					clearTimeout(serverTimeout)
					serverConfirmedAction = true
					dequeueNotifyLocation(event.skill)

					if(JITTER_COMPENSATION && event.stage == 0) {
						let delay = Date.now() - lastStartTime - ping.min - JITTER_ADJUST

						if(delay > 0 && delay < 1000) {
							delayNext = delay

							if(stageEnd) {
								stageEndTime += delay
								refreshStageEnd()
							}
						}
					}
				}

				if(info.forceClip && event.movement.length) {
					let distance = 0
					for(let m of event.movement) distance += m.distance

					if(info.distance < 0) distance = -distance

					oopsLocation = applyDistance(lastStartLocation, distance)

					if(!currentAction || currentAction.skill != event.skill) sendInstantMove(oopsLocation)
				}

				// If the server sends 2 S_ACTION_STAGE in a row without a S_ACTION_END between them and the last one is an emulated skill,
				// this stops your character from being stuck in the first animation (although slight desync will occur)
				if(serverAction && serverAction == currentAction && !skillInfo(currentAction.skill)) sendActionEnd(6)

				serverAction = event
				return false
			}

			serverAction = event

			if(event.id == lastEndedId) return false

			if(currentAction && skillInfo(currentAction.skill)) sendActionEnd(lastEndSkill == currentAction.skill ? lastEndType || 6 : 6)

			currentAction = event
			updateLocation()
		}
	})

	dispatch.hook('S_GRANT_SKILL', 1, event => {
		if(DEBUG) debug(['<- S_GRANT_SKILL', skillId(event.skill)].join(' '))
	})

	dispatch.hook('S_INSTANT_DASH', 3, event => {
		if(isMe(event.gameId)) {
			if(DEBUG) {
				let duration = Date.now() - debugActionTime,
					strs = [(serverAction && skillInfo(serverAction.skill)) ? '<X' : '<-', 'S_INSTANT_DASH', event.unk1, event.unk2, event.unk3]

				if(DEBUG_LOC) strs.push(...[degrees(event.w) + '\xb0', '(' + Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z) + ')'])

				strs.push(...[
					decimal(serverAction.loc.dist2D(event.loc), 3) + 'u',
					duration + 'ms',
					'(' + Math.round(duration * serverAction.speed) + 'ms)'
				])

				debug(strs.join(' '))
			}

			if(serverAction && skillInfo(serverAction.skill)) return false
		}
	})

	dispatch.hook('S_INSTANT_MOVE', 3, event => {
		if(isMe(event.gameId)) {
			if(DEBUG) {
					duration = Date.now() - debugActionTime,
					strs = ['<- S_INSTANT_MOVE']

				if(DEBUG_LOC) strs.push(...[degrees(event.w) + '\xb0', '(' + Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z) + ')'])

				strs.push(...[
					decimal(serverAction.loc.dist2D(event.loc), 3) + 'u',
					duration + 'ms',
					'(' + Math.round(duration * serverAction.speed) + 'ms)'
				])

				debug(strs.join(' '))
			}

			updateLocation(event,true)

			let info = serverAction && skillInfo(serverAction.skill)

			if(info && info.type == 'teleport' && currentAction && currentAction.skill != serverAction.skill)
				oopsLocation = currentLocation
		}
	})

	dispatch.hook('S_ACTION_END', 3, event => {
		if(isMe(event.gameId)) {
			if(DEBUG) {
				let duration = Date.now() - debugActionTime,
					strs = [(event.id == lastEndedId || skillInfo(event.skill)) ? '<X' : '<-', 'S_ACTION_END', skillId(event.skill), event.type]

				if(DEBUG_LOC) strs.push(...[degrees(event.w) + '\xb0', '(' + Math.round(event.loc.x), Math.round(event.loc.y), Math.round(event.loc.z) + ')'])

				if(serverAction)
					strs.push(...[
						decimal(serverAction.loc.dist2D(event.loc), 3) + 'u',
						duration + 'ms',
						'(' + Math.round(duration * serverAction.speed) + 'ms)'
					])
				else strs.push('???')

				debug(strs.join(' '))
			}

			serverAction = null
			lastEndSkill = event.skill
			lastEndType = event.type

			if(event.id == lastEndedId) {
				lastEndedId = 0
				return false
			}

			let info = skillInfo(event.skill)
			if(info) {
				if(info.type == 'dash')
					// If the skill ends early then there should be no significant error
					if(currentAction && event.skill == currentAction.skill) {
						updateLocation(event)
						sendActionEnd(event.type)
					}
					// Worst case scenario, teleport the player back if the error was large enough for the client to act on it
					else if(!lastEndLocation || Math.round(lastEndLocation.x / 100) != Math.round(event.x / 100) || Math.round(lastEndLocation.y / 100) != Math.round(event.y / 100) || Math.round(lastEndLocation.z / 100) != Math.round(event.z / 100))
						sendInstantMove(event)

				// Skills that may only be cancelled during part of the animation are hard to emulate, so we use server response instead
				// This may cause bugs with very high ping and casting the same skill multiple times
				if(currentAction && event.skill == currentAction.skill && [2, 13, 25, 29, 37, 43].includes(event.type)) sendActionEnd(event.type)

				return false
			}

			if(!currentAction)
				console.log('[SkillPrediction] S_ACTION_END: currentAction is null', skillId(event.skill), event.id)
			else if(event.skill != currentAction.skill)
				console.log('[SkillPrediction] S_ACTION_END: skill mismatch', skillId(currentAction.skill), skillId(event.skill), currentAction.id, event.id)

			currentAction = null
		}
	})

	dispatch.hook('S_EACH_SKILL_RESULT', dispatch.base.majorPatchVersion >= 67 ? 6 : 5, event => {
		let target = event.targetAction
		if(isMe(event.target) && target.enable) {
			if(DEBUG) {
				let duration = Date.now() - debugActionTime,
					strs = ['<- S_EACH_SKILL_RESULT.targetAction', skillId(target.skill), target.stage]

				if(DEBUG_LOC) strs.push(...[degrees(target.w) + '\xb0', '(' + Math.round(target.loc.x), Math.round(target.loc.y), Math.round(target.loc.z) + ')'])

				debug(strs.join(' '))
			}

			if(currentAction && skillInfo(currentAction.skill)) sendActionEnd(9)

			currentAction = serverAction = target

			updateLocation()
		}
	})

	dispatch.hook('S_DEFEND_SUCCESS', 1, event => {
		if(isMe(event.cid))
			if(currentAction && currentAction.skill == serverAction.skill) currentAction.defendSuccess = true
			else if(DEFEND_SUCCESS_STRICT || job != 10) return false
	})

	dispatch.hook('S_CANNOT_START_SKILL', 1, event => {
		if(DEBUG) debug('<- S_CANNOT_START_SKILL ' + skillId(event.skill, Flags.Player))

		if(skillInfo(event.skill, true)) {
			if(SKILL_DELAY_ON_FAIL && SKILL_RETRY_COUNT && currentAction && (!serverAction || currentAction.skill != serverAction.skill) && event.skill == currentAction.skill - 0x4000000)
				delayNext += SKILL_RETRY_MS

			return false
		}
	})

	dispatch.hook('C_CAN_LOCKON_TARGET', 1, event => {
		let info = skillInfo(event.skill)
		if(info) {
			let ok = true

			if(info.partyOnly) {
				ok = false

				if(partyMembers) 
					for(let member of partyMembers)
						if(member.equals(event.target)) {
							ok = true
							break
						}
			}

			dispatch.toClient('S_CAN_LOCKON_TARGET', Object.assign({ok}, event))
		}
	})

	dispatch.hook('S_CAN_LOCKON_TARGET', 1, event => skillInfo(event.skill) ? false : undefined)

	function startAction(opts) {
		let info = opts.info

		if(info.consumeAbnormal)
			if(Array.isArray(info.consumeAbnormal))
				for(let id of info.consumeAbnormal)
					abnormality.remove(id)
			else
				abnormality.remove(info.consumeAbnormal)

		sendActionStage(opts)

		if(info.type == 'dash') sendInstantDash(opts.targetLoc)

		if(info.triggerAbnormal)
			for(let id in info.triggerAbnormal) {
				let abnormal = info.triggerAbnormal[id]

				if(Array.isArray(abnormal))
					abnormality.add(id, abnormal[0], abnormal[1])
				else
					abnormality.add(id, abnormal, 1)
			}

		lastStartTime = Date.now()
	}

	function sendActionStage(opts) {
		opts.stage = opts.stage || 0
		opts.distanceMult = opts.distanceMult || 1

		let info = opts.info,
			multiStage = Array.isArray(info.length),
			movement = opts.movement

		movePlayer(opts.distance * opts.distanceMult)

		if(multiStage)
			movement = movement && movement[opts.stage] || !opts.moving && get(info, 'inPlace', 'movement', opts.stage) || get(info, 'movement', opts.stage) || []
		else
			movement = movement || !opts.moving && get(info, 'inPlace', 'movement') || info.movement || []

		dispatch.toClient('S_ACTION_STAGE', 4, currentAction = {
			gameId: myChar(),
			loc: currentLocation.loc,
			w: currentLocation.w,
			templateId: model,
			skill: opts.skill,
			stage: opts.stage,
			speed: info.type == 'charging' ? 1 : opts.speed,
			id: actionNumber,
			unk1: 1,
			unk2: false,
			dest: undefined,
			target: 0,
			movement
		})

		opts.distance = (multiStage ? get(info, 'distance', opts.stage) : info.distance) || 0

		let serverTimeoutTime = ping.max + (SKILL_RETRY_COUNT * SKILL_RETRY_MS) + SERVER_TIMEOUT

		if(info.type == 'teleport' && opts.stage == info.teleportStage) {
			opts.distance = Math.min(opts.distance, Math.max(0, currentLocation.loc.dist2D(opts.targetLoc) - 15)) // Client is approx. 15 units off
			applyDistance(currentLocation, opts.distance)
			currentLocation.loc.z = opts.targetLoc.z
			sendInstantMove()
			opts.distance = 0
		}
		else if(info.type == 'holdInfinite' || info.type == 'charging' && opts.stage > 0 && !(opts.stage < info.length.length)) {
			serverTimeout = setTimeout(sendActionEnd, serverTimeoutTime, 6)
			stageEnd = null
			return
		}

		let speed = opts.speed + (info.type == 'charging' ? opts.chargeSpeed : 0),
			length = Math.round((multiStage ? info.length[opts.stage] : info.length) / speed)

		if(length > serverTimeoutTime) serverTimeout = setTimeout(sendActionEnd, serverTimeoutTime, 6)

		if(multiStage) {
			if(!opts.moving) {
				let inPlaceDistance = get(info, 'inPlace', 'distance', opts.stage)

				if(inPlaceDistance !== undefined) opts.distance = inPlaceDistance
			}

			if(opts.stage + 1 < info.length.length) {
				opts.stage += 1
				stageEnd = sendActionStage.bind(null, opts)
				stageEndTime = Date.now() + length
				stageEndTimeout = setTimeout(stageEnd, length)
				return
			}
		}
		else
			if(!opts.moving) {
				let inPlaceDistance = get(info, 'inPlace', 'distance')

				if(inPlaceDistance !== undefined) opts.distance = inPlaceDistance
			}

		if(info.type == 'dash' && opts.distance) {
			let distance = lastStartLocation.loc.dist2D(opts.targetLoc)

			if(distance < opts.distance) {
				length *= distance / opts.distance
				opts.distance = distance
			}
		}

		if(info.type == 'charging') {
			opts.stage += 1
			stageEnd = sendActionStage.bind(null, opts)
			stageEndTime = Date.now() + length
			stageEndTimeout = setTimeout(stageEnd, length)
			return
		}

		stageEnd = sendActionEnd.bind(null, info.type == 'dash' ? 39 : 0, opts.distance * opts.distanceMult)
		stageEndTime = Date.now() + length
		stageEndTimeout = setTimeout(stageEnd, length)
	}

	function clearStage() {
		clearTimeout(serverTimeout)
		clearTimeout(stageEndTimeout)
	}

	function refreshStageEnd() {
		clearTimeout(stageEndTimeout)
		stageEndTimeout = setTimeout(stageEnd, stageEndTime - Date.now())
	}

	function sendInstantDash(dest) {
		dispatch.toClient('S_INSTANT_DASH', 3, {
			gameId: myChar(),
			target: 0,
			unk: 0,
			loc: dest,
			w: currentLocation.w
		})
	}

	function sendInstantMove(event) {
		if(event) updateLocation(event)

		dispatch.toClient('S_INSTANT_MOVE', 3, {
			gameId: myChar(),
			loc: currentLocation.loc,
			w: currentLocation.w
		})
	}

	function sendActionEnd(type, distance) {
		clearStage()
			
		if(canVB){
			clearTimeout(VBtimer);
			canVB = false;
			if(DEBUG) console.log('Chained VB disabled');
		}

		if(!currentAction) return

		if(DEBUG) debug(['<* S_ACTION_END', skillId(currentAction.skill), type || 0, degrees(currentLocation.w) + '\xb0', (distance || 0) + 'u'].join(' '))

		if(oopsLocation && (FORCE_CLIP_STRICT || !currentLocation.inAction)) sendInstantMove(oopsLocation)
		else movePlayer(distance)


		dispatch.toClient('S_ACTION_END', 3, {
			gameId: myChar(),
			loc: currentLocation.loc,
			w: currentLocation.w,
			templateId: model,
			skill: currentAction.skill,
			type: type || 0,
			id: currentAction.id
		})
		

		if(currentAction.id == actionNumber) {
			let info = skillInfo(currentAction.skill)
			if(info) {
				if(info.consumeAbnormalEnd)
					if(Array.isArray(info.consumeAbnormalEnd))
						for(let id of info.consumeAbnormalEnd)
							abnormality.remove(id)
					else
						abnormality.remove(info.consumeAbnormalEnd)

				if(info.type == 'dash') lastEndLocation = currentLocation
			}
		}
		else lastEndedId = currentAction.id

		actionNumber++
		if(actionNumber > 0xffffffff) actionNumber = 0x80000000

		oopsLocation = currentAction = null
	}

	function sendCannotStartSkill(skill) {
		dispatch.toClient('S_CANNOT_START_SKILL', 1, {skill})
	}

	function sendSystemMessage(type, vars) {
		let message = '@' + sysmsg.maps.get(dispatch.base.protocolVersion).name.get(type)

		for(let key in vars)
			message += '\x0b' + key + '\x0b' + vars[key]

		dispatch.toClient('S_SYSTEM_MESSAGE', 1, { message })
	}

	function updateLocation(event, inAction, special) {
		event = event || currentAction

		currentLocation = {
			loc: event.loc,
			w: special ? event.w || currentLocation.w : event.w, // Should be a skill flag maybe?
			inAction
		}
	}

	function retry(cb, count = 1) {
		if(count > SKILL_RETRY_COUNT) return

		setTimeout(() => {
			if(cb()) retry(cb, count + 1)
		}, SKILL_RETRY_MS)
	}

	// The real server uses loaded maps and a physics engine for skill movement, which would be costly to simulate
	// However the client avoids teleporting the player if the sent position is close enough, so we can simply approximate it instead
	function movePlayer(distance) {
		if(distance && !currentLocation.inAction) applyDistance(currentLocation, distance)
	}

	function applyDistance(loc, distance) {
		loc.loc.add(new Vec3(distance, 0, 0).rotate(loc.w))
		return loc
	}
	
	// Modifies the chain part (last 2 digits) of a skill ID, preserving flags
 	function modifyChain(id, chain) {
 		return id - ((id & 0xffffff) % 100) + chain
 	}
	
	function decimal(n, p) {
		p = 10 ** p
		return Math.round(n * p)  / p
	}
	
	function degrees(w) { return Math.round(w / Math.PI * 180) + '\xb0' }

	function skillId(id, flagAs) {
		id |= flagAs

		let skillFlags = ['[?1]', 'N', '[?2]', '[?3]', 'C', 'S']

		let flags = ''

		for(let i = 0; i < 6; i++)
			if(id & (1 << 31 - i)) flags += skillFlags[i]

		id = (id & 0x3ffffff).toString()

		switch(flags) {
			case 'S':
				id = [id.slice(0, -4), id.slice(-4, -2), id.slice(-2)].join('-')
				break
			case 'C':
				id = [id.slice(0, -2), id.slice(-2)].join('-')
				break
		}
		return flags + id
	}

	function skillInfo(id, local) {
		if(!local) id -= 0x4000000

		let cached = skillsCache[id]

		if(cached !== undefined) return cached

		let group = Math.floor(id / 10000),
			level = Math.floor(id / 100) % 100 - 1,
			sub = id % 100,
			info = [ // Ordered by least specific < most specific
				get(skills, job, '*'),
				get(skills, job, '*', 'level', level),
				get(skills, job, '*', 'race', race),
				get(skills, job, '*', 'race', race, 'level', level),
				get(skills, job, group, '*'),
				get(skills, job, group, '*', 'level', level),
				get(skills, job, group, '*', 'race', race),
				get(skills, job, group, '*', 'race', race, 'level', level),
				get(skills, job, group, sub),
				get(skills, job, group, sub, 'level', level),
				get(skills, job, group, sub, 'race', race),
				get(skills, job, group, sub, 'race', race, 'level', level)
			]

		// Note: Exact skill (group, sub) must be specified for prediction to be enabled. This helps to avoid breakage in future patches
		if(info[8]) {
			cached = skillsCache[id] = Object.assign({}, ...info)
			delete cached.race // Sanitize to reduce memory usage
			delete cached.level
			return cached
		}

		return skillsCache[id] = null
	}

	function isMe(id) {
		return cid.equals(id) || vehicleEx && vehicleEx.equals(id)
	}

	function myChar() {
		return vehicleEx ? vehicleEx : cid
	}

	function get(obj, ...keys) {
		if(obj === undefined) return

		for(let key of keys)
			if((obj = obj[key]) === undefined)
				return

		return obj
	}
	
	function enableVB(){
		canVB = true;
		clearTimeout(VBtimer);
		if(DEBUG) console.log('You can now use chained VB');
	}

	function debug(msg) {
		console.log('[%d] %s', ('0000' + (Date.now() % 10000)).substr(-4,4), msg)
	}
}