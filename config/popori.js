/* Note:
	* '*' can be used in place of the skill group or sub-skill to set default values
	* Processing order is 'noInterrupt' > 'chains' > 'abnormals'
*/

module.exports = {
	0: { // Warrior
		1: { // Combo Attack
			'*': { noInterrupt: [32] },
			0: {
				length: 565,
				distance: 54.32
			},
			1: {
				length: 650,
				distance: 21.171
			},
			2: {
				length: 650,
				distance: 56.196
			},
			3: {
				length: 900,
				distance: 63.529
			}
		},
		2: { // Evasive Roll
			0: {
				length: 1060,
				distance: 150,
				forceClip: true,
				stamina: 500,
				instantStamina: true,
				noInterrupt: [2, 10, 32],
				glyphs: {
					21015: { stamina: -100 },
					21067: { stamina: -100 },
					21101: { stamina: -120 }
				}
			}
		},
		3: { // Torrent of Blows
			0: {
				length: 1600,
				distance: 75,
				noInterrupt: [32]
			}
		},
		4: { // Rain of Blows
			'*': { distance: 148.904 },
			0: {
				length: 2540,
				noInterrupt: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 16, 17, 19, 22, 23, 28, 29, 32, 34, 35, 36, 37, 39],
				abnormals: {
					100801: { skill: 360100 }
				},
				chains: {
					18: 30,
					21: 30,
					27: 30
				}
			},
			30: {
				length: 2000,
				abnormals: {
					100801: { skill: 360130 }
				}
			}
		},
		5: { // Battle Cry
			0: {
				length: 1665,
				noInterrupt: [32],
				glyphs: {
					21040: { speed: 1.5 }
				}
			}
		},
		8: { // Assault Stance
			'*': {
				length: 575, 
				noInterrupt: [32]
			},
			0: { stamina: 1000 },
			50: true
		},
		9: { // Defensive Stance
			'*': {
				length: 575, 
				noInterrupt: [32]
			},
			0: { stamina: 1000 },
			50: true
		},
		10: { // Death From Above
			0: {
				length: 2055,
				noInterrupt: [2, 32]
			}
		},
		11: { // Poison Blade
			0: {
				length: 830,
				distance: 35,
				noInterrupt: [32]
			}
		},
		12: { // Leaping Strike
			0: {
				length: 1710,
				distance: 250,
				noInterrupt: [32]
			}
		},
		/*13: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1630,
				noInterrupt: [32],
				noRetry: true
			}
		},*/
		16: { // Charging Slash
			0: {
				type: 'dash',
				fixedSpeed: 1,
				length: 1100,
				distance: 467.88,
				noRetry: true,
				noInterrupt: [32]
			},
			1: { length: 825 }
		},
		17: { // Vortex Slash
			0: {
				length: 1600,
				requiredBuff: 100400,
				noInterrupt: [32]
			}
		},
		18: { // Combative Strike
			'*': {
				length: 1100,
				distance: 128.889,
				noInterrupt: [32]
			},
			1: true,
			2: true
		},
		19: { // Rising Fury
			'*': { noInterrupt: [32] },
			0: {
				length: 725,
				distance: 161.738
			},
			1: {
				length: 1400,
				distance: 116.629
			}
		},
		20: { // Deadly Gamble
			0: {
				fixedSpeed: 1,
				length: 300,
				noInterrupt: [32]
			}
		},
		21: { // Cascade of Stuns
			0: {
				length: 1400,
				distance: 116.63,
				noInterrupt: [32]
			}
		},
		23: { // Spinning Counter
			0: {
				length: 1080,
				distance: 65.344,
				requiredBuff: 100700,
				abnormals: {
					100201: { chain: 6 }
				}
			}
		
		},
		24: { // Smoke Aggressor
			0: {
				fixedSpeed: 1,
				length: 475,
				noInterrupt: [32]
			}
		},
		25: { // Command: Attack
			0: {
				fixedSpeed: 1,
				length: 700,
				requiredBuff: 102600,
				noInterrupt: [32]
			}
		},
		26: { // Command: Follow
			0: {
				fixedSpeed: 1,
				length: 700,
				requiredBuff: 102600,
				noInterrupt: [32]
			}
		},
		27: { // Pounce
			0: {
				length: 2000,
				distance: 180,
				noInterrupt: [32],
				glyphs: {
					21048: { speed: 1.3 },
					21082: { speed: 1.3 }
				}
			}
		},
		28: { // Traverse Cut
			0: {
				length: 2000,
				distance: 160,
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 12, 13, 16, 17, 19, 21, 22, 28, 29, 32, 34, 36, 37, 39],
				abnormals: {
					100201:{ skill: 390100 }
				},
				chains: {
					11: 30,
					18: 30,
					27: 30
				}
			},
			30: {
				length: 2675,
				distance: 210,
				abnormals: {
					100201: { skill: 390130 }
				}
			}
		},
		29: { // Blade Draw
			0: {
				length: 3000,
				distance: 94.5,
				noInterrupt: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, '16-0', 18, '19-0', 21, 22, 23, 27, 29, 34, 35, 36, 37],
				interruptibleWithAbnormal: {
					102010: 3
				},
				abnormals: {
					102010: { chain: 30 },
					100801: { skill: 370100 }
				},
				chains: {
					3: 30,
					16: 30,
					17: 30,
					19: 30,
					28: 30,
					32: 30,
					39: 30
				}
			},
			30: {
				length: 1335,
				distance: 135,
				abnormals: {
					100801: { skill: 370130 }
				}
			}
		},
		30: { // Scythe
			0: {
				length: 1840,
				distance: 150,
				noInterrupt: [1, 3, 5, 8, 9, 10, 13, 16, 17, 18, 19, 21, 22, 23, 27, 28, 32, 34, 35, 39],
				abnormals: {
					100801: { skill: 380100 }
				},
				chains: {
					2: 30,
					4: 30,
					11: 30,
					12: 30,
					29: 30,
					36: 30,
					37: 30
				}
			},
			30: {
				length: 1380,
				distance: 150,
				abnormals: {
					100801: { skill: 380130 }
				}
			}
		},
		31: { // Reaping Slash
			'*': { distance: 110 },
			0: {
				length: 2275,
				distance: 110,
				noInterrupt: [1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 16, 17, 19, 21, 22, 23, 27, 28, 29, 32, 33, 34, 35, 37, 39],
				chains: {
					4: 30,
					18: 30,
					36: 30
				}
			},
			30: { length: 1665 }
		},
		32: { // Cross Parry
			0: {
				type: 'holdInfinite',
				fixedSpeed: 1,
				requiredBuff: [100201],
				stamina: 50
			}
		},
		34: { // Binding Sword
			0: { 
				length: 1900,
				noInterrupt: [1, 2, 3, 4, 5, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 27, 28, 29, 32, 33, 34, 35, 36, 37, 39]
			}
		},
		35: { // Infuriate
			0: { 
				length: 2425,
				noInterrupt: [32],
				requiredBuff: [100201]
			}
		},
		36: { // Rain of Blows (Deadly Gamble)
			'*': { distance: 148.905 },
			0: { 
				length: 2800,	//yes, only this is a lot longer than regular one, I don't know why
				noInterrupt: [32]
		    },
			30: { length: 2000 }
		},
		37: { // Blade Draw (Deadly Gamble)
			0: {
				length: 3000,
				distance: 94.5,
				abnormals: {
					102010: { chain: 30 }
				}
			},
			30: {
				length: 1335,
				distance: 135
			}
		},
		38: { // Scythe (Deadly Gamble)
			'*': { distance: 150 },
			0: { 
				length: 1840,
				noInterrupt: [32]
			},
			30: { length: 1380 }
		},
		39: { // Traverse Cut (Defensive Stance)
			0: {
				length: 2000,
				distance: 160,
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 12, 13, 16, 17, 19, 21, 22, 29, 32, 34, 36, 37, 39],
				chains: {
					11: 30,
					18: 30,
					27: 30
				}
			},
			30: {
				length: 2675,
				distance: 210
			}
		},
	},
	1: { // Lancer
		1: { // Combo Attack
			'*': { noInterrupt: [2] },
			0: {
				length: 650,
				distance: 72.894,	
			},
			1: {
				length: 1025,
				distance: 39.051,
			},
			2: {
				length: 1815,
				distance: 41.058,
			}
		},
		2: { // Stand Fast
			0: {
				type: 'holdInfinite',
				fixedSpeed: 1,
				stamina: 50
			}
		},
		3: { // Onslaught
			'*': {
				distance: [0, 100, 100, 100, 100, 15.255],
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 11, 12, 13, 15, 18, 21, 23, 24, 25, 26, 27],
				abnormals: {
					22060: { speed: 1.25 }
				},
				chains: {
					5: 30
				}
			},
			0: { length: [950, 500, 500, 500, 400, 775] },
			30: { length: [713, 375, 375, 375, 300, 582] }
		},
		4: { // Challenging Shout
			0: {
				length: 2225,
				noInterrupt: [2],
				glyphs: {
					22056: { speed: 1.25 },
					22085: { speed: 1.25 }
				}
			}
		},
		5: { // Shield Bash
			0: {
				length: 850,
				distance: 30,
				noInterrupt: [2]
			}
		},
		7: { // Guardian Shout
			0: { 
				length: 800,
				noInterrupt: [2]
			}
		},
		8: { // Shield Counter
			0: {
				length: 1450,
				distance: 90,
				onlyDefenceSuccess: true
			}
		},
		9: { // Leash
			0: { 
				length: [725, 850],
				noInterrupt: [2]
		    }
		},
		10: { // Debilitate
			0: {
				length: 925,
				distance: 30,
				noInterrupt: [2]
			}
		},
		/*11: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1645,
				noInterrupt: [2],
				noRetry: true
			}
		},*/
		12: { // Infuriate
			0: { 
				length: 2425,
				noInterrupt: [2]
		    }
		},
		13: { // Spring Attack
			0: {
				length: 2800,
				distance: 85,
				noInterrupt: ['1-0', '1-1', 2, 3, 4, 9, 11, 12, 13, 15, '18-0', 21, 23, 24, 25, 26, 27],
				chains: {
					1: 30,
					5: 30,
					8: 30,
					10: 30,
					18: 30
			    }
			},
			30: {
				length: 1850,
				distance: 85
			}
		},
		15: { // Charging Lunge
			0: {
				type: 'dash',
				fixedSpeed: 1,
				length: 1135,
				distance: 467.886,
				noInterrupt: [2, 15]
			},
			1: { 
				length: 940,
				noInterrupt: [2]
		    }
		},
		16: { // Second Wind
			0: {
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [2]
			}
		},
		17: { // Adrenaline Rush
			0: {
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [2]
			}
		},
		18: { // Shield Barrage
			0: {
				length: 625,
				distance: 92.39,
				noInterrupt: [2],
				abnormals: {
					201550: { speed: 1.2 }
				}
			},
			1: {
				length: 800,
				distance: 89.462,
				noInterrupt: [2]
			}
		},
		19: { // Pledge of Protection
			0: {
				fixedSpeed: 1,
				length: 1000,
				noInterrupt: [2]
			}
		},
		20: { // Menacing Wave
			0: {
				fixedSpeed: 1,
				length: [715, 815],
				noInterrupt: [2]
			}
		},
		21: { // Lockdown Blow
			0: {
				length: 1400,
				distance: 92.39,
				noInterrupt: [2]
			}
		},
		22: { // Iron Will
			0: {
				fixedSpeed: 1,
				length: 800,
				noInterrupt: [2]
			}
		},
		23: { // Master's Leash
			0: {
				length: [725, 850],
				requiredBuff: 201000,
				noInterrupt: [2]
			}
		},
		24: { // Chained Leash
			0: { 
				length: [725, 850],
				noInterrupt: [2]
		    }
		},
		25: { // Wallop
			0: {
				length: 2375,
				distance: 100,
				noInterrupt: [1, 2, 3, 4, 5, 9, 11, 12, '18-0', 21, 23, 24, 25, 26, 27],
				chains: {
					8: 30,
					10: 30,
					13: 30,
					15: 30,
					18: 30
			    }
			},
			30: {
				length: 1910,
				distance: 100
			}
		},
		26: { // Backstep
			0: {
				length: 725,
				distance: -150,
				forceClip: true,
				stamina: 800,
				instantStamina: true,
				noInterrupt: [2, 26],
				glyphs: {
					22067: { stamina: -100 },
					22089: { stamina: -100 }
				}
			}
		},
		27: { // Rallying Cry
			0: { 
				length: 950,
			    noInterrupt: [2]
		    }
		}	
	},	
	2: { // Slayer
		1: { // Combo Attack
			0: {
				length: 750,
				distance: 31.526
			},
			1: {
				length: 1025,
				distance: 49.396
			},
			2: {
				length: 750,
				distance: 19.333
			},
			3: {
				length: 1650,
				distance: 19.848
			}
		},
		2: { // Knockdown Strike
			'*': {
				consumeAbnormal: 23220,
				length: 2850,
				distance: 175.811,
				abnormals: {
					23070: { speed: 1.25 }
				},
				chains: {
					14: 30,
					20: 0
				}
			},
			0: true,
			1: true,
			2: true,
			30: { length: 2410 }
		},
		3: { // Whirlwind
			0: {
				length: 2870,
				distance: 116.085,
				abnormals: {
					23080: { speed: 1.25 }
				}
			}
		},
		4: { // Evasive Roll
			'*': { 
				length: 1185,
				distance: 150.316,
				noInterrupt: [4],
				forceclip: true,
			},
			0: true,
			30: { requiredBuff: 301200 }
		},
		5: { // Dash
			0: {
				fixedSpeed: 1,
				length: 700,
			}
		},
		8: { // Overhand Strike
			0: {
				length: 3365,
				distance: 150,
				noInterrupt: ['1-0', '1-1', '1-2', 4, 6, 8, 10, '14-0', '14-1', 17, 21, 25],
				abnormals: {
					300801: { skill: 250100 }
				},
				chains: {
					1: 30,
					2: 30,
					3: 30,
					9: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					24: 30
				}
			},
			30: {
				length: 1325,
				distance: 150,
				abnormals: {
					300801: { skill: 250130 }
				}
			}
		},
		9: { // Leaping Strike
			0: {
				length: 2175,
				distance: 250,
			}
		},
		10: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1630,
				noRetry: true
			}
		},
		12: { // Heart Thrust
			0: {
				length: 2330,
				distance: 174.049,
				abnormals: {
					23060: { speed: 1.25 },
					23061: { speed: 1.35 }
				}
			}
		},
		13: { // Stunning Backhand
			0: {
				length: 2130,
				distance: 56.491,
			}
		},
		14: { // Distant Blade
			'*': {
				triggerAbnormal: { 23220: 3000 },
				consumeAbnormalEnd: 23220
			},
			0: {
				length: 600,
				distance: 75
			},
			1: {
				length: 600,
				distance: 75,
			},
			2: {
				length: 1500,
				distance: 112.417
			}
		},
		15: { // Startling Kick
			0: {
				length: 1490,
				distance: -175,
				forceClip: true,
				glyphs: {
					23060: { speed: 1.25 }
			    }
		    }
		},
		16: { // Fury Strike
			0: {
				length: 1000,
				distance: 141.738,
			}
		},
		17: { // Headlong Rush
			0: {
				type: 'dash',
				fixedSpeed: 1,
				length: 1000,
				distance: 413,
			}
		},
		18: { // Overpower
			0: {
				fixedSpeed: 1,
				length: 200,
			}
		},
		19: { // Tenacity
			0: {
				fixedSpeed: 1,
				length: [500, 700],
			}
        },
		20: { // In Cold Blood
			0: {
				triggerAbnormal: { 23220: 2000 },
				fixedSpeed: 1,
				length: 1185,
			}
		},
		21: { //Exausting Blow
		    0: {
				length: 1175,
			    distance: 75,
			},
		},
		23: { // Measured Slice
			'*': {
				distance: 189
			},
			0: {
				length: 3685,
				noInterrupt: [1, 2, 3, 4, 6, 9, 10, 12, 13, 14, 15, 16, 17, 21, 22],
				chains: {
					8: 30,
					24: 30,
					25: 30
				}
			},
			30: { length: 1670 }
 		},
		24: { // Eviscerate
			0: {
				length: 1915,
				distance: 50,
				noInterrupt: ['1-0', '1-1', '1-2', 4, 6, 10, 14, 16, 17, 21, 22, 24],
				chains: {
					1: 30,
					2: 30,
					3: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					15: 30,
					25: 30
				}
			},
			30: {
				length: 1500,
				distance: 100
			}
		},
		25: { // Ultimate Overhand Strike
			'*': { distance: 150 },
			0: { length: 3365},
			30: { length: 1325 }
		}
	},
	3: { // Berserker
			1: { // Combo Attack
				'*': { 
					noInterrupt: [2, 4]
				},
				0: {
					length: 1155,
					distance: 48.886
				},
				1: {
					length: 925,
					distance: 7.06
				},
				2: {
					length: 1125,
					distance: 40.926
				},
				3: {
					length: 1825,
					distance: 43.68
				}
			},
		2: { // Axe Block
			'*': { type: 'holdInfinite' },
			0: { fixedSpeed: 1 },
			30: true,
			31: { fixedSpeed: 1 }
		},
		3: { // Thunderstrike
			'*': {
				type: 'chargeCast',
				length: 1750
			},
			0: {
				type: 'charging',
				//length: [650, 2700],			//for low level skill only, as you can't fullcharge and overcharge
				//length: [650, 650, 2700],
				length: [650, 650, 650, 2700],
				noInterrupt: [2, 4, 10, 15, 18, 24, 25, 30],
				glyphs: {
					24067: { chargeSpeed: 0.25 }
				},
				abnormals: {
					24130: { chargeSpeed: 0.3 },
					24170: { chargeSpeed: 0.25 },
					4010150: { chargeSpeed: 0.2 }
				}
			},
			10: {
				distance: 69.513,
                noInterrupt: [2, 4, 24, 25, 30]			
			}, 
			11: {
				distance: 69.513,
                noInterrupt: [2, 4, 24, 25, 30]
			},
			12: {
				distance: 69.513,
                noInterrupt: [2, 4, 24, 25, 30]		
	        },
			13: {
				distance: 69.513,
				noInterrupt: [2, 4, 24, 25, 30]			  
			}
		},
		4: { // Flatten
			'*': {
				length: 3120,
				distance: 73.344,
				glyphs: {
					24008: { speed: 1.25 },
					24050: { speed: 1.25 }
				},
				abnormals: {
					24100: { speed: 1.25 },
					24101: { speed: 1.30 }
				}
			},
			0: {
				noInterrupt: [1, 2, '3-10', '3-11', '3-12', '3-13', 4, '8-30', '10-10', '10-11', '10-12', 11, '10-13', 12, 13, '15-10', '15-11', '15-12', '15-13', '15-14', '16', '18-10', '18-11', '18-12', '18-13', 24, 27, 28, 29, 30, 31, '32-0'],
				abnormals: {
					401400: { chain: 1 }
				},
				chains: {
					6: 30,
					25: 30,
					32: 31				
				}
			},
			1: { chains: {
					6: 31,
					25: 31
				 }
		    },
			30: { length: 2350 },
			31: { length: 2350 }
		},
		5: { // Dash
			0: {
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [2]
			}
		},
		6: { // Sweeping Strike
			'*': {
				length: 1285,
				distance: 53.412,
				noRetry: true
			},
			0: { 
				noInterrupt: [2],
			    interruptibleWithAbnormal: {
				    401404: 2
				},
				abnormals: {
					401404: { chain: 30 }
				}
		    },
			1:  true,
			30: true,
		},
		7: { // Mocking Shout
		    0: {
				fixedSpeed: 1,
				length: [315, 1100],
				noInterrupt: [2]
				
			}
        },
		8: { // Fiery Rage
			'*': { noInterrupt: [2] },
			0: {
				fixedSpeed: 1,
				length: 600
			},
			30: { 
				length: 1760,
				requiredBuff: 401400
		    }
		},
		10: { // Cyclone
			'*': { type: 'chargeCast' },
			0: {
				type: 'charging',
				//length: [650, 2700],			//for low level skill only, as you can't fullcharge and overcharge
				//length: [650, 650, 2700],
				length: [650, 650, 650, 2700],
			    noInterrupt: [2, 3, 4, 15, 18, 24, 25, 30],
				glyphs: {
					24009: { chargeSpeed: 0.25 },
					24052: { chargeSpeed: 0.25 },
					24096: { chargeSpeed: 0.3 }
				},
				abnormals: {
					24010: { chargeSpeed: 0.3 },
					24190: { chargeSpeed: 0.3 },
					4010150: { chargeSpeed: 0.2 },
					401400: { chain: 6 }
				}
			},
			10: {
				length: 1335,
				distance: 50,
				noInterrupt: [2, 4, 24, 25, 30] 
			},
			11: {
				length: [375, 375, 1335],
				distance: [33.33, 33.33, 50],
				noInterrupt: [2, 4, 24, 25, 30]
			},
			12: {
				length: [375, 375, 375, 375, 1335],
				distance: [33.33, 33.33, 33.33, 33.33, 50],
				noInterrupt: [2, 4, 24, 25, 30]
			},
			13: {
				length: [375, 375, 375, 375, 1335],
				distance: [33.33, 33.33, 33.33, 33.33, 50],
				noInterrupt: [2, 4, 15, 24, 25, 30]
			}
		},
		11: { // Leaping Strike 
			0: {
				length: 2250,
				distance: 250,
				noInterrupt: [2]
			}
		},
		12: { // Unchained Anger
			'*': { 
				length: [1050, 550],
				noInterrupt: [2]
			},
			30: true,
			31: true
		},
		13: { // Retaliate (TODO: Check)
			0: {
				type: 'retaliate',
				length: 1625,
				noInterrupt: [2],
				noRetry: true
			}
		},
		/*15: { // Vampiric Blow
            '*': {                    // Chained VB Usage: 1. "Show default Chained Skills" in the Chained Skills menu must be on.        
				type: 'chargeCast',  //                    2. Must be in combat when used.  
				length: 1940        //                    Else the animation of VB won't go off causing slight desync.
			 },                                                		                               
            0: {             
                type: 'charging',       
				//length: [800, 2700],			//for low level skill only, as you can't fullcharge and overcharge
				//length: [800, 800, 2700],
				length: [800, 800, 800, 2700],
				noInterrupt: [2, '3-10', '3-11', '3-12', 4, '10-10', '10-11', '10-12', '18-10', '18-11', '18-12', 24, 25, 30],
				abnormals: {
					4010150: { chargeSpeed: 0.2 }
				},
				chains: {
                    '3-13': 14,
                    '10-13': 14,
                    '18-13': 14
                }
            },
            10: {
				distance: 69.512,
				noInterrupt: [2, 4, 24, 25, 30]
			},
            11: {
				distance: 69.512,
				noInterrupt: [2, 4, 24, 25, 30]
			},
            12: {
				distance: 69.512,
				noInterrupt: [2, 4, 24, 25, 30]
			},
            13: {
				distance: 69.512,
				noInterrupt: [2, 4, 24, 25, 30]
			},
            14: { distance: 69.512 }
		},*/
		16: { // Fearsome Shout
		    0: {
				fixedSpeed: 1,
				length: [700, 1425],
				noInterrupt: [2]
			}
		},
		18: { // Lethal Strike
			'*': {
				type: 'chargeCast',
				length: 1500
		    },
			0: {
				type: 'charging',
				//length: [800, 2700],			//for low level skill only, as you can't fullcharge and overcharge
				//length: [800, 800, 2700],
				length: [800, 800, 800, 2700],
				noInterrupt: [2, 3, 4, 10, 15, 24, 25, 30],
				abnormals:  {
					24120: { chargeSpeed: 0.3 },
					4010150: { chargeSpeed: 0.2 },
					401400: { chain: 6 }
			    }
			},
			10: {
			    distance: 240.399,
                noInterrupt: [2, 4, 24, 25, 30]
			},
			11: {
				distance: 240.399,
				noInterrupt: [2, 4, 24, 25, 30]
			 },
			12: {
				distance: 240.399,
				noInterrupt: [2, 4, 24, 25, 30]
		    },
			13: {
				distance: 240.399,
				noInterrupt: [2, 4, 15, 24, 25, 30]
			}
		},
		19: { // Tenacity
			0: {
				fixedSpeed: 1,
				length: [500, 710],
				noInterrupt: [2]				
			}
        },
		20: { // Inescapable Doom
		    0: { 
			    fixedSpeed: 1,
				length: [600, 900],
				noInterrupt: [2]
			}
		},			
		21: { // Bloodlust
			0: {
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [2]
			}
		},
		24: { // Evasive Smash (TODO: Check)
			'*': {
				length: 1640,
				distance: 240.399
			},
			0: {
				length: 1015,
				distance: 150,
			},
			10: { noInterrupt: [2, 3, 4, 10, 15, 18, 25, 30] },
			11: { noInterrupt: [2, 3, 4, 10, 15, 18, 25, 30] },
			12: { noInterrupt: [2, 3, 4, 10, 15, 18, 25, 30] },
			13: { noInterrupt: [2, 3, 4, 10, 15, 18, 25, 30] }
		},
		25: { // Raze
			'*': { 
				length: 1205,
				distance: 96,
				glyphs: {
					24078: { speed: 1.25 }
				}
			},
			0: {
				noInterrupt: [2, '3-10', '3-11', '3-12', '3-13', 4, 6, '8-30', '10-10', '10-11', '10-12', '10-13', 11, 12, 13, '15-10', '15-11', '15-12', '15-13', '15-14', '18-10', '18-11', '18-12', '18-13', 24, 25, 26, 27, 28, 29, '32-0'],
				interruptibleWithAbnormal: { 
					401404: 2
				}, 
				abnormals: {
					401404: { chain: 31 }
				},
				chains: {
					1: 30,
					30: 31,
					31: 30,
					32: 31
				}
			},
			1: true,
			30: { length: 965 },
			31: { length: 965 }
		},
		26: { // Tackle
			0: {
				length: 1000,
				distance: 80,
				noInterrupt: [2]
			}
		},
		27: { // Unbreakable
			0: { 
				length: 2050,
				noInterrupt: [2] 
			},
		},
		28: { // Intimidation
		    0: {
				length: 1560,
				noInterrupt: [2]               
			},
		    50: { 
			    length: 1560,
                noInterrupt: [2]
			}
		},
		29: { // Evasive Roll (TODO: Check)
			0: {
				length: 920,
				distance: 150,
				forceClip: true,
				noInterrupt: [2, 29]
			}
		},
		30: { // Axe Counter (TODO: Check)
		    '*': {
				length: 1195,	//WTF
				distance: 240.399,	//WTF
				noInterrupt: [1, '3-10', '3-11', '3-12', '3-13', 4, 6, '8-30', '10-10', '10-11', '10-12', '10-13', 11, 12, 13, '15-10', '15-11', '15-12', '15-13', '15-14', '18-10', '18-11', '18-12', '18-13', 24, 25, 26, 27, 28, 29, 30, 31, 32],
				requiredBuff: 401402
			},
			0: true,
			30: true
		},
		31: { // Overwhelm (TODO: Check)
			0: {
				type: 'dash',
				fixedSpeed: 1,
				length: 1135,
				distance: 467.906,
				noInterrupt: [2],
				noRetry: true
			},
			1: { 
				length: 1340,
			    noInterrupt: [2]
            }
		},
		32: { // Punishing Strike (TODO: Check)
			'*': {
				noInterrupt: [2],
				requiredBuff: 401400
			},
			0: {
				length: 930,
				distance: 61.387
			},
			1: {
				length: 800,
				distance: 192.319
			}
		}
	},
	4: { // Sorcerer
		1: { // Fireball
			0: { length: 730 }
		},
		2: { // Frost Sphere
			0: { length: 810 }
		},
		3: { // Lightning Trap
			0: {
				length: 1300,
				abnormals: {
					25090: { speed: 1.4 }
				}
			}
		},
		4: { // Arcane Pulse
			'*': {
				type: 'chargeCast',
				length: 1285
			},
			0: {
				type: 'charging',
				length: [1000, 1000, 400],
				noInterrupt: [7, 26],
				abnormals: {
					25140: { chargeSpeed: 0.3 }
				}
			},
			10: {
				noInterrupt: [7, 26],
				abnormals: {
					500150: { skill: 330110 },
					501600: { skill: 330150 },
					501650: { skill: 330150 }
				}
			},
			11: {
				noInterrupt: [7, 26],
				abnormals: {
					500150: { skill: 330111 },
					501600: { skill: 330150 },
					501650: { skill: 330150 }
				}
			},
			12: {
				noInterrupt: [7, 26],
				abnormals: {
					500150: { skill: 330112 },
					501600: { skill: 330150 },
					501650: { skill: 330150 }
				}
			}
		},
		5: { // Mana Infusion
			0: { length: 4600 }
		},
		6: { // Meteor Strike
			0: {
				length: 3925,
				glyphs: {
					25003: { speed: 1.17 },
					25069: { speed: 1.25 }
				},
				abnormals: {
					25100: { speed: 1.25 },
					500150: { skill: 320100 },
					//501600: { skill: 320150 },
					501650: { skill: 320150 }
				}
			}
		},
		7: { // Backstep
			0: {
				length: 660,
				distance: -200,
				forceClip: true
			}
		},
		8: { // Flame Pillar
			0: {
				length: 1200,
				abnormals: {
					25070: { speed: 1.25 }
				}
			}
		},
		10: { // Mana Barrier
			0: { length: 625 }
		},
		11: { // Lightning Strike
			0: { length: 845 }
		},
		12: { // Void Pulse
			0: { length: 935 }
		},
		13: { // Mindblast
			0: {
				length: 2325,
				glyphs: {
					25048: { speed: 1.3 }
				},
				abnormals: {
					25110: { speed: 1.4 }
				}
			}
		},
		16: { // Painblast
			0: { length: 1580 }
		},
		17: { // Painful Trap
			0: { length: 1100 }
		},
		18: { // Glacial Retreat
			0: {
				length: 1100,
				distance: -187.5,
				forceClip: true
			}
		},
		19: { // Mana Siphon
			'*': {
				type: 'chargeCast',
				length: 900
			},
			0: {
				type: 'charging',
				length: [1000, 1000, 400],
				noInterrupt: [7, 26]
			},
			10: {noInterrupt: [7, 26] },
			11: {noInterrupt: [7, 26] },
			12: {noInterrupt: [7, 26] }
		},
		20: { // Flaming Barrage
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				length: 1500,
				glyphs: {
					25001: { speed: 1.3 },
					25096: { speed: 1.4 }
				},
				abnormals: {
					25060: { speed: 1.25 }
				}
			}
		},
		21: { // Nerve Exhaustion
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [300, 1200]
			}
		},
		22: { // Burning Breath
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [300, 1200]
			}
		},
		23: { // Mana Volley
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [325, 875]
			}
		},
		25: { // Time Gyre
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 700
			}
		},
		26: { // Teleport Jaunt
			0: {
				type: 'teleport',
				length: [200, 260],
				distance: [0, 333],
				noInterrupt: [26],
				teleportStage: 1,
				noRetry: true
			}
		},
		27: { // Hailstorm
			0: { length: 980 }
		},
		30: { // Nova
			0: {
				length: 2850,
				glyphs: {
					25092: { speed: 1.3 }
				}
			}
		},
		31: { // Warp Barrier
			'*': { length: 475 },
			0: true,
			10: true,
			20: true
		},
		32: { // Meteor Shower
			'*': {
				length: 6475, // Elin: 6475 | M.Helf/F.Casta: 6750/6775
				glyphs: {
					25003: { speed: 1.17 },
					25069: { speed: 1.25 }
				},
				noRetry: true
			},
			0: true,
			50: { length: 3700 }
		},
		33: { // Arcane Pulse (Mana Boost)
			'*': {
				type: 'chargeCast',
				length: 1285,
				noRetry: true
			},
			10: true,
			11: true,
			12: true,
			50: true
		},
		34: { // Mana Boost
			0: { length: 750 }
		}
	},
	5: { // Archer
		1: { // Arrow
			0: { length: 400 }
		},
		2: { // Arrow Volley
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noInterrupt: [22]
			},
			10: {
				type: 'lockonCast',
				length: 1225,
				noInterrupt: [22]
			}
		},
		3: { // Radiant Arrow
			'*': {
				type: 'chargeCast',
				length: 1760
			},
			0: {
				type: 'charging',
				//length: [600, 2700],			//for low level skill only, as you can't fullcharge and overcharge
				//length: [600, 600, 2700],
				length: [600, 600, 600, 2700],
				noInterrupt: [4, 22],
				abnormals: {
					26180: { chargeSpeed: 0.3 },
					601450: { chargeSpeed: 0.5 }
				}
			},
			10: { 
				distance: -90.604,
				noInterrupt: [22]
			},
			11: { 
				distance: -90.604,
				noInterrupt: [22]
			},
			12: { 
				distance: -90.604,
				noInterrupt: [22]
			},
			13: { 
				distance: -90.604,
				noInterrupt: [22]
			}
		},
		4: { // Penetrating Arrow
			'*': {
				type: 'chargeCast',
				length: 1300
			},
			0: {
				type: 'charging',
				//length: [800, 2700],			//for low level skill only, as you can't fullcharge and overcharge
				//length: [800, 800, 2700],
				length: [800, 800, 800, 2700],
				noInterrupt: [3, 22],
				abnormals: {
					26160: { chargeSpeed: 0.3 },
					26170: { chargeSpeed: 0.3 },
					26171: { chargeSpeed: 0.4 },
					26190: { chargeSpeed: 0.3 },
					601450: { chargeSpeed: 0.5 }
				}
			},
			10: { 
				distance: -48.668,
				noInterrupt: [22]
			},
			11: { 
				distance: -48.668,
				noInterrupt: [22]
		    },
			12: { 
				distance: -48.668,
				noInterrupt: [22]
			},
			13: { 
				distance: -48.668,
				noInterrupt: [22]
			}
		},
		5: { // Rain of Arrows
			0: {
				length: 3170,
				glyphs: {
					26077: { speed: 1.4 }
				},
				abnormals: {
					902: { speed: 1.15 },
					911: { speed: 1.15 },
					916: { speed: 1.15 },
					920: { speed: 1.225 }
				}
			}
		},
		6: { // Backstep
			0: {
				length: 670,
				distance: -200,
				forceClip: true
			}
		},
		7: { // Feign Death
			0: {
				fixedSpeed: 1,
				length: [3230, 54545, 1650],
				distance: [-136.38, 0, 0]
			}
		},
		8: { // Rapid Fire
			'*': { 
				noRetry: true,
				noInterrupt: [22]
			},
			0: { 
				length: 445,
				noInterrupt: [6] 
			},
			1: { length: 600 },
			2: { length: 700 },
			3: { length: 800 },
			4: { length: 700 },
			5: { length: 800 },
			6: { length: 1240 }
		},
		9: { // Slow Trap
			0: { length: 1150 }
		},
		10: { // Stunning Trap
			0: { length: 1150 }
		},
		12: { // Velik's Mark
			0: { length: 200 }
		},
		14: { // Retaliate
		    0: {
				type: 'retaliate',
				length: 1600,
                noRetry: true	
			}
		},
		15: { // Incendiary Trap
			0: { length: 1150 }
		},
		16: { // Breakaway Bolt
			0: {
				length: 1340,
				distance: -250,
				forceClip: true
			}
		},
		17: { // Web Arrow
			0: { 
				length: 525,
				noInterrupt: [22]
			}
		},
		18: { // Close Quarters
			0: {
				length: 300,
				distance: 89.797
			},
			1: {
				length: 1200,
				distance: 87.292
			}
		},
		19: { // Poison Arrow
			0: { 
				length: 1115,
				distance: -12.167,
				noInterrupt: [22]
			}
		},
		20: { // Restraining Arrow
			0: { 
				length: 525,
				noInterrupt: [22]
			}
		},
		21: { // Sniper's Eye
		    0:  { length: 625 },
			50: { length: 625 }
		},
		22: { // Sequential Fire
			0: {
				length: 450,
				requiredBuff: 600200,
				noRetry: true,
				noInterrupt: [22]
			}
		},
		23: { // Stunning Trap Arrow
			0: { length: 1440 }
		},
		25: { // Incendiary Trap Arrow
			0: { length: 1215 }
		},
		29: { // Thunderbolt
			0: {
				length: 3770,
				distance: -96.604,
				noInterrupt: [22],
				glyphs: {
					26089: { speed: 1.3 },
					26102: { speed: 1.3 }
				}
			}
		},
		31: { // Tenacity
			0: {
				fixedSpeed: 1,
				length: [500, 700]
			}
		},
		32: { // Find Weakness
			0: {
				fixedSpeed: 1,
				length: 200
			}
		},
		33: { // Chase
			0: {
				type: 'dash',
				fixedSpeed: 1,
				length: 1000,
				distance: 412.078
			}
		}
	},
	6: { // Priest
		1: { // Divine Radiance
			0: { length: 625 },
			1: { length: 650 },
			2: { length: 675 },
			3: { length: 725 }
		},
		2: { // Regeneration Circle
			0: {
				length: 3150,
				abnormals: {
					902: { speed: 1.15 },
					911: { speed: 1.15 },
					916: { speed: 1.15 },
					920: { speed: 1.225 }
				}
			}
		},
		3: { // Healing Circle
			0: { length: 1750 }
		},
		5: { // Blessing of Shakan
			0: { length: 1300 }
		},
		6: { // Arise
			0: { length: 830 }
		},
		8: { // Mana Infusion
			0: {
				length: 4600,
				glyphs: {
					28044: { speed: 1.25 }
				}
			}
		},
		10: { // Purifying Circle
			0: { length: 1275 }
		},
		11: { // Metamorphic Blast
			0: { length: 830 }
		},
		12: { // Resurrect
			0: {
				length: 5915, // 5900
				glyphs: {
					28045: { speed: 1.15 }
				},
				abnormals: {
					902: { speed: 1.15 },
					911: { speed: 1.15 },
					916: { speed: 1.15 },
					920: { speed: 1.225 }
				}
			}
		},
		14: { // Summon: Party
			0: { length: 4500 }
		},
		16: { // Shocking Implosion
			0: { length: 1700 }
		},
		17: { // Prayer of Peace
			0: {
				length: [925, 925, 850],
				glyphs: {
					28021: { speed: 2 }
				}
			}
		},
		18: { // Heal Thyself
			0: { length: 1250 }
		},
		19: { // Focus Heal
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 54440
			},
			10: {
				type: 'lockonCast',
				length: 1940
			}
		},
		22: { // Kaia's Shield
			0: { length: 650 }
		},
		23: { // Blessing of Balder
			0: { length: 1300 }
		},
		26: { // Fiery Escape
			0: {
				length: 1125,
				distance: -250.5,
				forceClip: true
			}
		},
		27: { // Final Reprisal
			0: {
				length: 2600,
				noInterrupt: [2, 3, 5, 10, 12, 14, 17, 18, 19, 23, 25, 26, 27, 28-10, 34, 38, 41-10],
				chains: {
					11: 30,
					16: 30,
					29: 30,
					40: 30
				}
			},
			30: { length: 1040 }
		},
		28: { // Mana Charge
			'*': {
				type: 'chargeCast',
				length: 825
			},
			0: {
				type: 'charging',
				length: [800, 1600, 3500],
				noInterrupt: [26, 27, 38],
				glyphs: {
					28031: { chargeSpeed: 0.25 } //there is still an armor roll providing 0.15 more chargeSpeed.
				}
			},
			10: { noInterrupt: [26, 27, 38] },
			11: { noInterrupt: [26, 27, 38] },
			12: { noInterrupt: [26, 27, 38] }
		},
		29: { // Triple Nemesis
			0: { length: 800 },
			1: { length: 800 },
			2: { length: 1250 }
		},
		30: { // Plague of Exhaustion
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1430
			}
		},
		31: { // Guardian Sanctuary
			0: {
				fixedSpeed: 1,
				length: 700
			}
		},
		32: { // Divine Respite
			0: {
				fixedSpeed: 1,
				length: [1300, 900]
			}
		},
		33: { // Ishara's Lullaby
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noRetry: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [300, 1430]
			}
		},
		34: { // Restorative Burst
			0: { length: 1430 }
		},
		35: { // Energy Stars
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1430
			}
		},
		37: { // Healing Immersion
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900,
				noInterrupt: [37],
				partyOnly: true
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1430,
				noInterrupt: ['37-10']
			}
		},
		38: { // Backstep
			0: {
				length: 665,
				distance: -200,
				forceClip: true
			}
		},
		39: { // Grace of Resurrection
			0: { length: 5900 }
		},
		40: { // Zenobia's Vortex
			0: { length: 1080 }
		},
		41: { // Divine Intervention
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 54440,
				partyOnly: true
			},
			10: {
				type: 'lockonCast',
				length: 925
			}
		}
	},
	7: { // Mystic
		1: { // Sharan Bolt
			0: { length: 675 },
			1: { length: 675 },
			2: { length: 675 },
			3: { length: 675 }
		},
		2: { // Corruption Ring
			0: {
				type: 'hold',
				length: 10850,
				chainOnRelease: 11
			},
			11: { length: 840 },
			12: { length: 1275 }
		},
		4: { // Ancient Binding
			0: { length: 1280 }
		},
		5: { // Titanic Favor
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 59900
			},
			10: {
				type: 'lockonCast',
				length: 1940
			}
		},
		6: { // Shara's Lash
			0: { length: 1300 }
		},
		8: { // Metamorphic Blast
			0: {
				length: 820,
				noInterrupt: [1, 2, 4, '5-10', 6, '9-10', 10, 13, 14, 15, 16, 17, 21, '18-10', '22-10', 37, '41-10', 43], // lvl 11 can cancel now, do we need to add 12-10? hard to test
				chains: {
					8: 30,
					23: 30
				}
			},
			30: { length: 820 }
		},
		9: { // Arun's Cleansing
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 59900
			},
			10: {
				type: 'lockonCast',
				length: 790
			}
		},
		10: { // Resurrect
			0: {
				length: 8080,
				glyphs: {
					27049: { speed: 1.2 },
					27079: { speed: 1.2 }
				},
				abnormals: {
					902: { speed: 1.25 },
					911: { speed: 1.25 },
					916: { speed: 1.25 },
					920: { speed: 1.375 }
				}
			}
		},
		11: { // Summon: Party
			0: { length: 4400 }
		},
		12: { // Vow of Rebirth
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 59900,
				partyOnly: true
			},
			10: {
				type: 'lockonCast',
				length: 1940
			}
		},
		13: { // Aura of the Merciless
			'*': { length: 1300 },
			0: true,
			50: true
		},
		14: { // Aura of the Swift
			'*': { length: 1300 },
			0: true,
			50: true
		},
		15: { // Aura of the Unyielding
			'*': { length: 1300 },
			0: true,
			50: true
		},
		16: { // Aura of the Tenacious
			'*': { length: 1300 },
			0: true,
			50: true
		},
		17: { // Teleport Jaunt
			0: {
				type: 'teleport',
				length: [200, 260],
				distance: [0, 333],
				noInterrupt: [17],
				teleportStage: 1,
				noRetry: true
			}
		},
		18: { // Arun's Vitae
			'*': { noInterrupt: [8, 17, 23] },
			0: {
				type: 'charging',
				length: [1050, 450]
			},
			10: {
				type: 'chargeCast',
				length: 850,
				abnormals: {
					27070: { speed: 1.25 },
					27080: { speed: 1.25 }
				}
			}
		},
		21: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1625,
				noRetry: true
			}
		},
		22: { // Arun's Tears
		    '*': { noInterrupt: [8, 17, 23] },
			0: {
				type: 'charging',
				length: [1050, 450]
			},
			10: {
				type: 'chargeCast',
				length: 850,
				abnormals: {
					27100: { speed: 1.25 }
				}
			}
		},
		23: { // Metamorphic Smite
			0: {
				length: 1430,
				noInterrupt: [1, 2, 4, '5-10', 6, '9-10', 10, 13, 14, 15, 16, 17, '18-10', 21, '22-10', 23, 37, '41-10', 43],
				chains: {
					8: 30
				}
			},
			30: { length: 1100 }
		},
		24: { // Volley of Curses
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: [525, 675]
			}
		},
		25: { // Thrall of Protection
			0: {
				fixedSpeed: 1,
				length: [1000, 1720]
			}
		},
		27: { // Thrall of Life
			0: {
				fixedSpeed: 1,
				length: [240, 470]
			}
		},
		28: { // Sonorous Dreams
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1430
			}
		},
		29: { // Regression
			fixedSpeed: 1,
			length: [500, 700]
		},
		30: { // Curse of Exhaustion
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1430
			}
		},
		31: { // Curse of Confusion
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1430
			}
		},
		32: { // Mire
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				fixedSpeed: 1,
				length: 1430
			}
		},
		33: { // Thrall of Vengeance
			0: {
				fixedSpeed: 1,
				length: [275, 575]
			}
		},
		34: { // Thrall of Wrath
			0: {
				fixedSpeed: 1,
				length: [1000, 1700]
			}
		},
		35: { // Command: Attack
			0: {
				fixedSpeed: 1,
				length: 700
			}
		},
		36: { // Command: Follow
			0: {
				fixedSpeed: 1,
				length: 700
			}
		},
		37: { // Warding Totem
			0: { length: 1900 }
		},
		41: { // Contagion
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 4900
			},
			10: {
				type: 'lockonCast',
				length: 1000
			}
		},
		42: { // Boomerang Pulse
			0: {
				length: 580,
				noInterrupt: [42]
			}
		},
		43: { // Release																																																																							
			0: { length: [400, 575] }
		}
	}
}