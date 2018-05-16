/*	Notes:
	* '*' can be used in place of the skill or sub-skill to set default values
	* Processing order is 'noInterrupt' > 'chains' > 'abnormals'
	* Default race is Elin unless specified
	Races:
	0 = Male Human
	1 = Female Human
	2 = Male High Elf
	3 = Female High Elf
	4 = Male Aman
	5 = Female Aman
	6 = Male Castanic
	7 = Female Castanic
	8 = Popori
	9 = Elin
	10 = Baraka
	Refer to here for what races have its numbers already added: https://github.com/Leyki/skill-prediction/wiki#race-specific-durations-and-distances-on-skills-status 
	If a race doesn't have its own property therefore assumed to use the same default value.
*/

module.exports = {
	0: { // Warrior
		1: { // Combo Attack
			'*': {
				noInterrupt: [1, 32],
				abnormals: {
					101750: { speed: 1.2 }
				}
			},
			0: {
				length: 566.4,
				distance: 64.29,
				race: {
					2: { distance: 47.53 }, // M.Helf: 47.534
					5: { distance: 45 }, // F.Aman: 45
					8: { distance: 54.32 }, // Popori: 54.32
					9: { distance: 64.29 } // Elin: 64.288
				}
			},
			1: {
				length: 657.3,
				distance: 51.69,
				race: {
					2: { distance: 42.12 }, // M.Helf: 42.117
					5: { distance: 39 }, // F.Aman: 39
					8: { distance: 21.17 }, // Popori: 21.171
					9: { distance: 51.69 } // Elin: 51.69
				}
			},
			2: {
				length: 657.3,
				distance: 28.08,
				race: {
					2: { distance: 28.08 }, // M.Helf: 28.078
					5: { distance: 26 }, // F.Aman: 26
					8: { distance: 56.2 }, // Popori: 56.196
					9: { distance: 28.08 } // Elin: 28.078
				}
			},
			3: {
				length: 900,
				distance: 73.34,
				race: {
					2: { distance: 79.9 }, // M.Helf: 79.897
					5: { distance: 85 }, // F.Aman: 85
					8: { distance: 63.53 }, // Popori: 63.529
					9: { distance: 73.34 } // Elin: 73.344
				}
			}
		},
		2: { // Evasive Roll
			0: {
				length: 839,
				distance: 150,
				//forceClip: true,
				stamina: 500,
				instantStamina: true,
				noInterrupt: [2, 10, 32],
				glyphs: {
					21015: { stamina: -100 },
					21067: { stamina: -100 },
					21101: { stamina: -120 }
				},
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				race: {
					7: { length: 837 }, // F.Casta
					8: { length: 1081 }, // Popori
					10: { length: 778.2 } // Baraka
				}
			}
		},
		3: { // Torrent of Blows
			0: {
				length: 1600,
				distance: 75,
				noInterrupt: [32],
				race: {
					2: { distance: 75 }, // M.Helf
					8: { distance: 75 }, // Popori
					9: { distance: 68.26 } // Elin: 68.259
				}
			}
		},
		4: { // Rain of Blows
			'*': { 
				distance: 151.87,
				race: {
					2: { distance: 152.73 }, // M.Helf: 152.733
					3: { distance: 143.35 }, // F.Helf: 143.351
					5: { distance: 150.71 }, // F.Aman: 150.714
					8: { distance: 148.9 }, // Popori: 148.904
					9: { distance: 151.87 } // Elin: 151.867
				},
				noRetry: true,
				consumeAbnormalEnd: 104110
			},
			0: {
				length: 2545.45, // 2527/2540  
				noInterrupt: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 16, 17, 19, 22, 23, 28, 29, 32, 34, 35, 36, 37, 39, 41, 42],
				chains: {
					18: 30,
					21: 30,
					27: 30,
					40: 30
				},
				abnormals: {
					104110: { chain: 30 }
				},
				level: {
					8: { 
						abnormals: { 
							100801: { skill: 360100 },
							104110: { chain: 30 }
						}
					}
				}
			},
			30: {
				length: 2000,
				level: {
					8: { abnormals: { 100801: { skill: 360130 } } }
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
				length: 566.4,
				noInterrupt: [32]
			},
			0: { stamina: 1000 },
			50: true
		},
		9: { // Defensive Stance
			'*': {
				length: 566.4,
				noInterrupt: [32]
			},
			0: { stamina: 1000 },
			50: true
		},
		10: { // Death From Above
			0: {
				length: 2066, 
				noInterrupt: [2, 32],
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				race: {
					1: { length: 2100 }, // F.Human
					2: { length: 2066 }, // M.Helf
					3: { length: 2033 }, // F.Helf
					6: { length: 2033 }, // M.Castanic
					7: { length: 2066 }, // F.Castanic
					8: { length: 2066 }, // Popori
					9: { length: 2033 } // Elin
				}
			}
		},
		11: { // Poison Blade
			0: {
				length: 833,
				distance: 35,
				noInterrupt: [32],
				race: {
					2: { distance: 0 }, // M.Helf
					3: {	// F.Helf
						length: 933,
						distance: 40
					},
					5: { distance: 40 }, // F.Aman
					6: { length: 933 }, // M.Castanic
					7: { length: 933 }, // F.Castanic
					8: { distance: 35 }, // Popori
					9: {	// Elin
						length: 933,
						distance: 54.85	// 54.582
					},
					10: { length: 933 } // Baraka
				}
			}
		},
		12: { // Leaping Strike
			0: {
				length: 1533,
				distance: 250,
				noInterrupt: [32],
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				glyphs: {
					21048: { speed: 1.2 },
					21082: { speed: 1.2 }
				},
				race: {
					2: { length: 1533 }, // M.Helf
					5: { length: 1533 }, // F.Aman
					7: { length: 1714 }, // F.Castanic
					8: { length: 1714 }, // Popori
					9: { length: 1533 } // Elin
				}	
			}
		},
		13: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1630,
				noInterrupt: [32],
				noRetry: true
			}
		},
		16: { // Charging Slash
			0: {
				type: 'dash',
				fixedSpeed: 1,
				length: 1117,
				distance: 467.88,
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				//noRetry: true,
				noInterrupt: [16, 32]
			},
			1: { length: 800 }
		},
		17: { // Vortex Slash (Awakening patch)
			'*': {
				length: 1633,
				noInterrupt: [32],
				glyphs: { 21040: { speed: 1.3 } }
			},
			0: true,
			1: true,
			2: true
		},
		18: { // Combative Strike
			'*': {
				length: 1100,
				distance: 120.28,
				noInterrupt: [32],
				race: {
					2: { distance: 120.28 }, // M.Helf: 120.277
					3: { distance: 127.11 }, // F.Helf: 127.113
					5: { distance: 120.28 }, // F.Aman: 120.277
					8: { distance: 128.89 }, // Popori: 128.889
					9: { distance: 138.28 } // Elin: 138.284
				}
			},
			0: true,
			1: true,
			2: true
		},
		19: { // Rising Fury
			'*': { noInterrupt: [32] },
			0: {
				length: 733,
				distance: 144.85,
				race: {
					2: { distance: 144.85 }, // M.Helf: 144.846
					3: { distance: 155.3 }, // F.Helf 155.303
					5: { distance: 143.27 }, // F.Aman: 143.269
					8: { distance: 161.74 }, // Popori: 161.738
					9: { distance: 170.67 } // Elin: 170.671
				}	
			},
			1: {
				length: 1400,
				distance: 100.15,
				race: {
					2: { distance: 100.11 }, // M.Helf: 100.114
					3: { distance: 92.11 }, // F.Helf 92.105
					5: { distance: 101.69 }, // F.Aman: 101.689
					8: { distance: 116.63 }, // Popori: 116.629
					9: { distance: 122.34 } // Elin: 122.342
				}
			}
		},
		20: { // Deadly Gamble
			0: {
				fixedSpeed: 1,
				length: 320,
				noInterrupt: [32]
			}
		},
		21: { // Cascade of Stuns
			0: { // Same animation as 2nd cast of Rising fury
				length: 1400,
				distance: 116.63,
				noInterrupt: [32],
				race: {
					2: { distance: 100.11 }, // M.Helf: 100.114
					8: { distance: 116.63 }, // Popori: 116.629
					9: { distance: 122.34 } // Elin: 122.342
				}
			}
		},
		22: { // Backstab
			0: {
				length: 1275,
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				onlyTarget: true
			}
		},
		23: { // Spinning Counter
			0: {
				length: 1091,
				distance: 65.35,
				requiredBuff: 100700,
				abnormals: {
					100200: { chain: 'invalid' },
					100201: { chain: 'invalid' }
				},
				race: {
					2: { distance: 68.81 }, // M.Helf: 68.805
					8: { distance: 65.34 }, // Popori: 65.344
					9: { distance: 77.36 } // Elin: 77.359
				}
			}
		},
		24: { // Smoke Aggressor
			0: {
				fixedSpeed: 1,
				length: 500,
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
		28: { // Traverse Cut
			'*': {
				noRetry: true,
				consumeAbnormalEnd: 104110
			},
			0: {
				length: 2000,
				distance: 160,
				noInterrupt: [1, 2, 3, 4, 8, 9, 10, 13, 16, 17, 19, 21, 22, 28, 29, 32, 34, 36, 37, 39, 41, 42],
				chains: {
					11: 30,
					12: 30,
					18: 30,
					27: 30,
					40: 30
				},
				abnormals: {
					104110: { chain: 30 }
				},
				level: {
					9: {
						abnormals: {
							100201: {skill: 390100 },
							104110: { chain: 30 }
						}
					}
				}
			},
			30: {
				length: 2666.66,
				distance: 210,
				level: { 
					9: { abnormals: { 100201: {skill: 390130 } } }
				}
			}
		},
		29: { // Blade Draw
			'*': {
				consumeAbnormalEnd: 104110,
				noRetry: true
			},
			0: {
				length: 3000,
				distance: 94.5,
				noInterrupt: [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, '16-0', 18, '19-0', 21, 22, 23, 29, 34, 35, 36, 37, 41, 42],
				interruptibleWithAbnormal: {
					102010: [3]
				},
				abnormals: {
					102010: { chain: 30 },
					104110: { chain: 30 }
				},
				chains: {
					3: 30,
					16: 30,
					17: 30,
					19: 30,
					28: 30,
					32: 30,
					39: 30,
					40: 30
				},
				level: {
					8: { 
						abnormals: {
							100801: {skill: 370100},
							102010: { chain: 30 },
							104110: { chain: 30 }
						}
					}
				}
			},
			30: {
				length: 1333.33,
				distance: 135,
				level: {
					8: { abnormals: { 100801: {skill: 370130} } }
				}
			}
		},
		30: { // Scythe
			'*': {
				distance: 150,
				noRetry: true,
				consumeAbnormalEnd: 104110
			}, // Old fast cast value was wrong on Elin, unless that had a pve intention on it, idk.
			0: {
				length: 1833,
				noInterrupt: [1, 3, 5, 8, 9, 10, 13, 16, 17, 18, 19, 21, 22, 23, 28, 30, 32, 34, 35, 38, 39, 41, 42],
				chains: {
					2: 30,
					4: 30,
					11: 30,
					12: 30,
					29: 30,
					36: 30,
					37: 30,
					40: 30
				},
				abnormals: {
					104110: { chain: 30 }
				},
				level: {
					8: {
						abnormals: {
							100801: { skill: 380100 },
							104110: { chain: 30 }
						}
					}
				}
			},
			30: {
				length: 1387,
				level: {
					8: { abnormals: { 100801: { skill: 380130 } } }
				}
			}
		},
		31: { // Reaping Slash
			'*': {
				distance: 110,
				noRetry: true,
				consumeAbnormalEnd: 104110
			},
			0: {
				length: 2275,
				noInterrupt: [1, 2, 3, 5, 8, 9, 10, 11, 12, 13, 16, 17, 19, 21, 22, 23, 28, 29, 32, 33, 34, 35, 37, 39, 41, 42],
				chains: {
					4: 30,
					18: 30,
					36: 30,
					40: 30
				},
				abnormals: {
					104110: { chain: 30 }
				}
			},
			30: { length: 1667 }
		},
		32: { // Cross Parry
			0: {
				type: 'holdInfinite',
				fixedSpeed: 1,
				requiredBuff: [100200, 100201],
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				stamina: 50
			}
		},
		34: { // Binding Sword
			0: { 
				length: 1902,
				noInterrupt: [1, 2, 3, 4, 5, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 28, 29, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42]
			}
		},
		35: { // Infuriate
			0: { 
				length: 2425,
				noInterrupt: [32],
				requiredBuff: [100200, 100201]
			}
		},
		36: { // Rain of Blows (Deadly Gamble)
			'*': { 
				distance: 151.87,
				race: {
					2: { distance: 152.73 }, // M.Helf: 152.733
					5: { distance: 150.71 }, // F.Aman: 150.714
					8: { distance: 148.9 }, // Popori: 148.904
					9: { distance: 151.87 } // Elin: 151.867
				},
				noRetry: true,
				consumeAbnormalEnd: 104110
			},
			0: { 
				length: 2800,
				noInterrupt: [32],
				abnormals: {
					104110: { chain: 30 }
				}
		    },
			30: { length: 2000 }
		},
		37: { // Blade Draw (Deadly Gamble)
			'*': {
				consumeAbnormalEnd: 104110,
				noRetry: true
			},
			0: {
				length: 3000,
				distance: 94.5,
				abnormals: {
					102010: { chain: 30 }
				}
			},
			30: {
				length: 1333.33,
				distance: 135
			}
		},
		38: { // Scythe (Deadly Gamble)
			'*': {
				distance: 150,
				noRetry: true,
				consumeAbnormalEnd: 104110
			},
			0: { 
				length: 1833,
				noInterrupt: [32],
				abnormals: {
					104110: { chain: 30 }
				}
			},
			30: { length: 1387 }
		},
		39: { // Traverse Cut (Defensive Stance)
			'*': {
				noRetry: true,
				consumeAbnormalEnd: 104110
			},
			0: {
				length: 2000,
				distance: 160,
				abnormals: {
					104110: { chain: 30 }
				}
			},
			30: {
				length: 2666.66,
				distance: 210
			}
		},
		40: { // Blade Waltz
			'*': {
				length: 810.6,
				distance: 156.248,
				noInterrupt: [32, 40, '41-0', '41-30', 42],
				noRetry: true,
				abnormals: {
					104101: { chain: 'invalid' },
					104100: { chain: 12 }
				}
			},
			10: {	// astance 1st?
				triggerAbnormal: {
					104101: 800,
					104110: 2000,
					104100: 8000
				},
				chains: {
					// essential mana says all skills can chain into BW, but need to specify them
					1: 11,
					2: 11,
					3: 11,
					4: 11,
					5: 11,
					8: 11,
					9: 11,
					10: 11,
					11: 11,
					12: 11,
					13: 11, // I assume retaliate can chain into this skill
					16: 11,
					17: 11,
					18: 11,
					19: 11,
					20: 11,
					21: 11,
					23: 11,
					24: 11,
					25: 11,
					26: 11,
					28: 11,
					29: 11,
					30: 11,
					31: 11,
					34: 11,
					35: 11,
					36: 11,
					37: 11,
					38: 11,
					39: 11,
					'41-31': 11
				}
			},
			11: {
				triggerAbnormal: {
					104101: 800,
					104110: 2000,
					104100: 8000
				}
			},
			12: {
				abnormals: { 100201: { skill: 400122 } },
				consumeAbnormal: 104100,
				triggerAbnormal: {
					104110: 2000
				}
			},
			20: {
				triggerAbnormal: { 
					104101: 800,
					104110: 2000,
					104100: 8000
				},
				abnormals: {
					104101: { chain: 'invalid' },
					104100: { chain: 22 }
				},
				chains: {
					// essential mana says all skills can chain into BW, but need to specify them
					1: 21,
					2: 21,
					3: 21,
					4: 21,
					5: 21,
					8: 21,
					9: 21,
					10: 21,
					11: 21,
					12: 21,
					13: 21, // I assume retaliate can chain into this skill
					16: 21,
					17: 21,
					18: 21,
					19: 21,
					20: 21,
					21: 21,
					23: 21,
					24: 21,
					25: 21,
					26: 21,
					28: 21,
					29: 21,
					30: 21,
					31: 21,
					34: 21,
					35: 21,
					36: 21,
					37: 21,
					38: 21,
					39: 21,
					'41-31': 21
				}
			},
			21: {
				abnormals: {
					104101: { chain: 'invalid' },
					104100: { chain: 22 }
				},
				triggerAbnormal: {
					104101: 800,
					104110: 2000,
					104100: 8000
				} 
			},
			22: { 
				consumeAbnormal: 104100,
				triggerAbnormal: {
					104110: 2000
				}
			}
		},
		41: { // Aerial Scythe
			'*': {
				noRetry: true,
				length: 1976.15,
				distance: 219.04,
				noInterrupt: ['41-31', 42],
				consumeAbnormal: 104110
			},
			0: {
				triggerAbnormal: { 105100: 1800 },
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30, // I assume retaliate can chain into this skill
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					23: 30,
					24: 30,
					25: 30,
					26: 30,
					28: 30,
					29: 30,
					30: 30,
					31: 30,
					34: 30,
					35: 30,
					36: 30,
					37: 30,
					38: 30,
					39: 30,
					40: 30
				},
				abnormals: {
					105100: { chain: 31 }
				}
			},
			30: {
				triggerAbnormal: { 105100: 1800 },
			},
			31: {
				consumeAbnormal: 105100,
				length: 1800,
				distance: 0
			}
		},
		42: { // Blade Frenzy
			0: {
				length: 3309.23,
				distance: 326.55,
				noInterrupt: [1, 3, 4, 8, 9, 10, 12, 13, 16, 17, 19, 21, 22, 29, 32, 34, 36, 37, 39, 40, '41-0', '41-30', 42],
				chains: {
					2: 30,
					30: 30,
					38: 30,
					'41-31': 30
				}
			},
			30: {
				length: 2507.06,
				distance: 326.55
			}
		},
		910: { // Awakening Eyes Aura(EU), Apex Urgency(NA)
			0: { length: 500 }
		}
	},
	1: { // Lancer
		1: { // Combo Attack
			'*': { noInterrupt: [1, 2] },
			0: {
				length: 635,
				distance: 74.45,
				race: {
					0: { distance: 78.55 }, // M.Human: 78.546
					2: { distance: 74.41 }, // M.Helf: 74.414
					4: { distance: 70 }, // M.Aman: 70
					5: { distance: 75 }, // F.Aman: 75
					8: { distance: 72.89 }, // Popori: 72.894
					9: { distance: 74.45 }, // Elin: 74.453
					10: { distance: 74.89 } // Baraka: 74.876
				}
			},
			1: {
				length: 1025,
				distance: 19.2,
				race: {
					0: { distance: 25 }, // M.Human: 25
					2: { distance: 30.8 }, // M.Helf: 30.798
					4: { distance: 25 }, // M.Aman: 25
					5: { distance: 30.52 }, // F.Aman: 30.523
					8: { distance: 39.05 }, // Popori: 39.051
					9: { distance: 19.2 }, // Elin: 19.2
					10: { distance: 30.8 } // Baraka: 30.81
				}
			},
			2: {
				length: 1815,
				distance: 66.07,
				race: {
					0: { distance: 70 }, // M.Human: 70
					2: { distance: 70 }, // M.Helf: 70
					4: { distance: 60 }, // M.Aman: 60
					5: { distance: 54.48 }, // F.Aman: 54.476
					8: { distance: 41.06 }, // Popori: 41.058
					9: { distance: 66.07 }, // Elin: 66.07
					10: { distance: 69.99 } // Barake: 69.985
				}
			}
		},
		2: { // Stand Fast
			0: {
				type: 'holdInfinite',
				fixedSpeed: 1,
				noRetry: true,
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				stamina: 50,
				level: {
					1: {
						length: 333,
						stamina: 40,
						endType51: true
					}
				}
			}
		},
		3: { // Onslaught
			'*': {
				distance: [0, 100, 100, 100, 100, 35], // 15~ M.Human, Popori and M.Aman?, do not log this skill with low fps
				noInterrupt: [3, 4, 8, 9, 10, 11, 12, 13, 15, '18-0', 21, 23, 24, 25, 26, 27, 28, 29],
				abnormals: {
					22060: { speed: 1.25 },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				chains: {
					1: 30,
					5: 30,
					'18-1': 30
				},
				race: {
					0: { distance: [0, 100, 100, 100, 100, 15] }, // M.Human
					2: { distance: [0, 100, 100, 100, 100, 16] }, // M.Helf
					4: { distance: [0, 100, 100, 100, 100, 13] }, // M.Aman
					5: { distance: [0, 100, 100, 100, 100, 14] }, // F.Aman
					8: { distance: [0, 100, 100, 100, 100, 15] }, // Popori
					9: { distance: [0, 100, 100, 100, 100, 35] }, // Elin, 80 FPS
					10: { distance: [0, 100, 100, 100, 100, 14.5] } // Baraka: 14.489
				}
			},
			0: { length: [939, 514.54, 514.54, 514.54, 393.63, 760.11] },
			30: { length: [686.66, 373.33, 373.33, 373.33, 288.66, 557.35] }
		},
		4: { // Challenging Shout
			'*': {
				length: 2215, // TODO: Verify
				noInterrupt: [2, 9, 12, 23, 26],
				glyphs: {
					22056: { speed: 1.25 },
					22085: { speed: 1.25 }
				},
				chains: {
					1: 30,
					3: 30,
					5: 30,
					8: 30,
					10: 30,
					13: 30,
					15: 30,
					18: 30,
					21: 30,
					25: 30
				}
			},
			0: true,
			30: true
		},
		5: { // Shield Bash
			'*': {
				length: 839.1,
				distance: 30,
				noInterrupt: [2],
				race: {
					0: { distance: 30.000 }, // M.Human
					2: { distance: 30.000 }, // M.Helf
					4: { distance: 30.000 }, // M.Aman
					5: { distance: 30.000 }, // F.Aman
					8: { distance: 30.000 }, // Popori
					9: { distance: 43.69 } // Elin: 43.693
					// 10: { distance: 30 } // Baraka: 30
				},
				chains: {
					10: 30
				}
			},
			0: true,
			1: true,
			2: { requiredBuff: 201830 },	//Debilitate->Shield Bash
			30: { length: 694.6 }
		},
		7: { // Guardian Shout
			0: {
				length: 566.4,
				noInterrupt: [2],
				race: {
					0: { length: 550 }, // M.Human
					2: { length: 550 }, // M.Helf
					4: { length: 550 }, // M.Aman
					5: { length: 550 }, // F.Aman
					8: { length: 800 }, // Popori
					9: { length: 575 }, // Elin
				}
			}
		},
		8: { // Shield Counter
			0: {
				length: 1455.33,
				distance: 90,
				onlyDefenceSuccess: true,
				race: {
					0: { distance: 90 }, // M.Helf: 90
					2: { distance: 95 }, // M.Helf: 95
					4: { distance: 85 }, // M.Aman: 85
					5: { distance: 85 }, // F.Aman: 85
					8: { distance: 90 }, // Popori: 90
					9: { distance: 108.06 }, // Elin: 108.063
					10: { distance: 90 } // Baraka: 90
				}
			}
		},
		9: { // Leash
			0: { 
				length: [733, 833],
				noInterrupt: [2]
		    }
		},
		10: { // Debilitate
			'*': {
				distance: 30, // Seems pretty equalized
				race: {
					0: { distance: 30 }, // M.Human
					2: { distance: 30 }, // M.Helf
					4: { distance: 30}, // M.Aman
					5: { distance: 30 }, // F.Aman
					8: { distance: 30 }, // Popori
					9: { distance: 43.69 } // Elin: 43.693
					// 10: { distance: 30 } // Baraka
				},
				triggerAbnormal: { 201830: 2000 }
			},
			0: { // Same animation as shield bash, just slower
				length: 925,
				noInterrupt: [3, 4, 5, 8, 9, 10, 11, 12, 13, 15, 21, 23, 24, 25, 26, 27, 28, 29],
				abnormals: {
					201831: { chain: 30 }
				},
				chains: {
					1: 30,
					18: 30
				}
			},
			30: {
				length: 840	
			}
		},
		11: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1633, // Is this correct?
				noRetry: true,
				noInterrupt: [2]
			}
		},
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
				triggerAbnormal: { 201831: 2000 },
				noInterrupt: ['1-0', '1-1', 3, 4, 9, 11, 12, 13, 15, 23, 24, 25, 26, 27, 28, 29],
				chains: {
					'1-2': 30,
					5: 30,
					8: 30,
					10: 30,
					18: 30,
					21: 30
			    }
			},
			30: {
				length: 1850,
				triggerAbnormal: { 201831: 2000 },
				distance: 85
			}
		},
		15: { // Charging Lunge
			0: {
				type: 'dash',
				fixedSpeed: 1,
				length: 1115,
				distance: 474.5,
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				noInterrupt: [2, 15]
			},
			1: { 
				length: 935,
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
				distance: 95, // M.Aman
				noInterrupt: [2],
				triggerAbnormal: { 201831: 2000 },
				abnormals: {
					201550: { speed: 1.2 }
				},
				race: {
					0: { distance: 100.13 }, // M.Human: 100.125
					2: { // M.Helf: 525, 102.701
						length: 525,
						distance: 102.7
					},
					4: { distance: 95 }, // M.Aman: 95
					5: { distance: 100.13 }, // F.Aman: 100.125
					8: { distance: 92.39 }, // Popori: 92.39
					9: { distance: 122.66 }, // Elin: 122.66
					10: { distance: 92.13 } // Baraka: 92.125
				}
			},
			1: {
				length: 800,
				distance: 87, // M.Aman
				noInterrupt: [2],
				race: {
					0: { distance: 74.84 }, // M.Human: 74.836
					2: { distance: 80.43 }, // M.Helf: 80.428
					4: { distance: 87 }, // M.Aman: 87
					5: { distance: 74.84 }, // F.Aman: 74.836
					8: { distance: 89.46 }, // Popori: 89.462
					9: { distance: 66.04 }, // Elin: 66.043
					10: { distance: 74.84 } // Baraka: 74.836
				}
			}
		},
		19: { // Pledge of Protection
			0: {
				fixedSpeed: 1,
				length: 1000,
				noInterrupt: [2]
			}
		},
		21: { // Lockdown Blow
			// Same animation as 1st cast of shield barrage, just slower
			'*': {
				length: 1400,
				noInterrupt: [2],
				distance: 100.13, // M.Human, 100.126,
				race: {
					0: { distance: 100.13 }, // M.Human: 100.125
					2: {
						length: 1175,	 // M.Helf: 1175, 102.701
						distance: 102.7
					},
					4: { distance: 95 }, // M.Aman: 95
					5: { distance: 100.13 }, // F.Aman: 100.125
					8: { distance: 92.39 }, // Popori: 92.39
					9: { distance: 122.66 }, // Elin: 122.66
					10: { distance: 92.13 } // Baraka: 92.125
				},
				chains: {
					10: 30,
					13: 30,
					18: 30
				}
			},
			0: true,		// low level skill?
			1: true,		// raw cast, Shield barrage 2nd -> Lockdown blow
			2: { requiredBuff: [201830, 201831] },	// Shield barrage 1st(201830)/Debilitate(201831)/Spring attack(201831) -> Lockdown blow
			30: {
				length: 1272.72,
				race: {
					2: { length: 1068 }
				}
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
				length: [733, 833],
				requiredBuff: 201000,
				noInterrupt: [2]
			}
		},
		24: { // Chained Leash
			1: {
				length: [733, 833],
				noInterrupt: [2]
			},
			2: {
				requiredBuff: 201803,
				length: 1692.42
			}
		},
		25: { // Wallop
			'*' :{
				distance: 100,
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				chains: {
					8: 30,
					10: 30,
					13: 30,
					15: 30,
					18: 30,
					21: 30
			    }
			},
			0: {
				length: 2391.3,
				noInterrupt: [1, 3, 4, 5, 9, 11, 12, 23, 24, 25, 26, 27, 28, 29]
			},
			30: { length: 1913.04 }
		},
		26: { // Backstep
			0: {
				length: 733,
				distance: -150,
				//forceClip: true,
				stamina: 800,
				instantStamina: true,
				noInterrupt: [26],
				glyphs: {
					22067: { stamina: -100 },
					22089: { stamina: -100 }
				},
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			}
		},
		27: { // Rallying Cry
			0: { // Same animation as guardian shout, just slower
				length: 640.4,
				noInterrupt: [2],
				race: {
					0: { length: 625 }, // M.Human
					2: { length: 625 }, // M.Helf
					4: { length: 625 }, // M.Aman
					5: { length: 625 }, // F.Aman
					8: { length: 950 }, // Popori
					9: { length: 650 } // Elin
					// 10: { length: 625 } // Baraka
				}
		    }
		},
		28: { // Righteous Leap(EU), Super Leap(NA)
			0: {
				length: [333.33, 1055, 3121.67],
				distance: [29.48, 445.52, 0],
				noRetry: true,
				noInterrupt: [1, 3, 4, 5, 9, 10, 12, 13, 18, 21, 23, 24, 26, 28, 29],
				chains: {
					15: 1,
					25: 1
				},
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			},
			1: {
				length: [250, 791.25, 833.75],
				distance: [29.48, 468.97, 0]
			}
		},
		29: { // Guardian's Barrier
			0: {
				type: 'holdInfinite',
				fixedSpeed: 1,
				length: 700,
				endType51: true
			}
		},
		30: { // Divine Protection
			0: { length: 1252 }
		},
		910: { // Awakening Eyes Aura(EU), Apex Urgency(NA)
			0: { length: 500 }
		}
	},
	2: { // Slayer
		1: { // Combo Attack
			'*': { noInterrupt: [1] },
			0: {
				length: 750,
				distance: 36.68,
				race: {
					0: { distance: 36.68 }, // M.Human: 36.679
					1: { distance: 36.68 }, // F.Human: 36.679
					2: { distance: 50.68 }, // M.Helf: 50.68
					3: { distance: 38.8 }, // F.Helf: 38.796
					4: { distance: 40 }, // M.Aman: 40
					5: { distance: 36.68 }, // F.Aman: 36.68
					6: { distance: 36.68 }, // M.Casta: 36.68
					7: { distance: 60 }, // F.Casta: 60
					8: { distance: 31.53 }, // Popori: 31.526
					9: { distance: 36.68 }, // Elin: 36.68
					10: { distance: 25.08 } // Baraka: 25.076
				}
			},
			1: {
				length: 1030,
				distance: 35.68,
				race: {
					0: { distance: 35.68 }, // M.Human: 35.675
					1: { distance: 35.68 }, // F.Human: 35.675
					2: { distance: 30.68 }, // M.Helf: 30.675
					3: { distance: 38.84 }, // F.Helf: 38.837
					4: { distance: 35 }, // M.Aman: 35
					5: { distance: 35.68 }, // F.Aman: 35.675
					6: { distance: 35.68 }, // M.Casta: 35.675
					7: { distance: 17 }, // F.Casta: 17
					8: { distance: 49.4 }, // Popori: 49.396
					9: { distance: 35.68 }, // Elin: 35.675
					10: { distance: 32.95 } // Baraka: 32.952
				}
			},
			2: {
				length: 750,
				distance: 28.05,
				race: {
					0: { distance: 28.05 }, // M.Human: 28.054
					1: { distance: 28.05 }, // F.Human: 28.054
					2: { distance: 33.05 }, // M.Helf: 33.054
					3: { distance: 24.23 }, // F.Helf: 24.225
					4: { distance: 20 }, // M.Aman: 20
					5: { distance: 28.05 }, // F.Aman: 28.054
					6: { distance: 22.3 }, // M.Casta: 22.302
					7: { distance: 23 }, // F.Casta: 23
					8: { distance: 19.33 }, // Popori: 19.333
					9: { distance: 28.05 }, // Elin: 28.504
					10: { distance: 22.5 } // Baraka: 22.5
				}
			},
			3: {
				length: 1650,
				distance: 46.76,
				race: {
					0: { distance: 46.76 }, // M.Human: 46.758
					1: { distance: 46.76 }, // F.Human: 46.758
					2: { distance: 46.76 }, // M.Helf: 46.578
					3: { distance: 45.32 }, // F.Helf: 45.323
					4: { distance: 40 }, // M.Aman: 40
					5: { distance: 64.36 }, // F.Aman: 64.359
					6: { distance: 118.2 }, // M.Casta: 118.202
					7: { distance: 45 }, // F.Casta: 45
					8: { distance: 19.85 }, // Popori: 19.848
					9: { distance: 46.76 }, // Elin: 46.757
					10: { distance: 37.5 } // Baraka: 37.5
				}
			}
		},
		2: { // Knockdown Strike
			'*': {
				consumeAbnormal: 23220,
				length: 2844.16,
				distance: 220.47,
				abnormals: {
					23070: { speed: 1.25 }
				},
				chains: {
					14: 30,
					20: 0
				},
				race: {
					0: { distance: 220.47 }, // M.Human: 220.47
					1: { distance: 220.47 }, // F.Human: 220.471
					2: { distance: 220.15 }, // M.Helf: 220.153
					3: { distance: 213.63 }, // F.Helf: 213.625
					4: { distance: 155 }, // M.Aman: 155
					5: { distance: 174.84 }, // F.Aman: 174.837
					6: { distance: 201.64 }, // M.Casta: 201.639
					7: { distance: 200 }, // F.Casta: 200
					8: { distance: 175.81 }, // Popori: 175.811
					9: { distance: 220.47 }, // Elin: 220.47
					10: { distance: 205.95 } // Baraka: 205.953
				}
			},
			0: true,
			1: true,
			2: true,
			30: { length: 2423.57 }
		},
		3: { // Whirlwind
			0: {
				length: 2871.66,
				distance: 128.69,
				abnormals: {
					301150: { speed: 1.20 },
					23080: { speed: 1.25 }
				},
				race: {
					0: {
						length: 2844.16,
						distance: 123.21
					}, // M.Human: 123.208
					1: { distance: 128.69 }, // F.Human: 128.691
					2: { distance: 116.49 }, // M.Helf: 116.489
					3: { distance: 99.61 }, // F.Helf: 99.606
					4: { distance: 125 }, // M.Aman: 125
					5: { distance: 137.22 }, // F.Aman: 137.221
					6: { distance: 123.21 }, // M.Casta: 123.208
					7: { distance: 155 }, // F.Casta: 155.004
					8: { distance: 116.09 }, // Popori: 116.085
					9: { distance: 128.69 }, // Elin: 128.691
					10: {
						length: 2844.16,
						distance: 91.21
					} // Baraka: 91.21
				}
			}
		},
		4: { // Evasive Roll
			'*': { 
				length: 909.1,
				distance: 150,
				//forceClip: true,
				noInterrupt: [4],
				noRetry: true,
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' },
					301200: { chain: 30 },
				},
				race: {
					8: {	// Popori: 150.316, 1185
						distance: 150.32,
						length: 1181.8
					}
				}
			},
			0: true,
			30: true
		},
		5: { // Dash
			0: {
				fixedSpeed: 1,
				length: 700,
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' }
				}
			}
		},
		6: { // Backstab
			0: {
				length: 1350,
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				onlyTarget: true
			}
		},
		8: { // Overhand Strike
			'*': {
				distance: 169.5,
				noRetry: true,
				race: {
					0: { distance: 171.14 }, // M.Human: 171.138
					1: { distance: 171.14 }, // F.Human: 171.138
					2: { distance: 171.14 }, // M.Helf: 171.138
					3: { distance: 152.19 }, // F.Helf: 152.194
					4: { distance: 145 }, // M.Aman: 145
					5: { distance: 134.53 }, // F.Aman: 134.532
					6: { distance: 161.14 }, // M.Casta: 161.138
					7: { distance: 170 }, // F.Casta: 170
					8: { distance: 150 }, // Popori: 150
					9: { distance: 169.65 }, // Elin: 169.648
					10: { distance: 151.14 } // Baraka: 151.138
				},
				consumeAbnormalEnd: 301604
			},
			0: {
				length: 3365,
				noInterrupt: ['1-0', '1-1', '1-2', 4, 6, 8, 10, '14-0', '14-1', 17, 21, 23, 25, 26, 28],
				abnormals: {
					300801: { skill: 250100 },
					300802: { skill: 250100 },
					301604: { chain: 30 }
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
					24: 30,
					27: 30
				}
			},
			30: {
				length: 1325,
				abnormals: {
					300801: { skill: 250130 },
					300802: { skill: 250130 }
				}
			}
		},
		9: { // Leaping Strike
			0: {
				length: 2175,
				distance: 250,
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
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
				length: 2320,
				distance: 180.96,
				abnormals: {
					23060: { speed: 1.25 },
					23061: { speed: 1.35 }
				},
				race: {
					0: { distance: 166.56 }, // M.Human: 166.555
					1: { distance: 179.55 }, // F.Human: 179.553
					2: { distance: 173.75 }, // M.Helf: 173.752
					3: { distance: 179.55 }, // F.Helf: 179.553
					4: { distance: 175 }, // M.Aman: 175
					5: { distance: 166.56 }, // F.Aman: 166.555
					6: { distance: 168.61 }, // M.Casta: 168.612
					7: { distance: 230 }, // F.Casta: 230, wind down animation moves her a lot
					8: { distance: 174.05 }, // Popori: 174.05
					9: { distance: 180.96 }, // Elin: 180.962
					10: { distance: 136.55 } // Baraka: 136.554
				}
			}
		},
		13: { // Stunning Backhand
			0: {
				length: 2125,
				distance: 76.71,
				race: {
					0: { distance: 62.07 }, // M.Human: 62.073
					1: { distance: 77.39 }, // F.Human: 77.393
					2: { distance: 55.79 }, // M.Helf: 55.787
					3: { distance: 69.62 }, // F.Helf: 69.622
					4: { distance: 40 }, // M.Aman: 40
					5: { distance: 62.07 }, // F.Aman: 62.073
					6: { distance: 86.12 }, // M.Casta: 86.124
					7: { distance: 80 }, // F.Casta: 80
					8: { distance: 56.49 }, // Popori: 56.491
					9: { distance: 76.71 }, // Elin: 76.706
					10: { distance: 47.07 } // Baraka: 47.072
				}
			}
		},
		14: { // Distant Blade
			'*': {
				triggerAbnormal: { 23220: 2000 },
				consumeAbnormalEnd: 23220
			},
			0: {
				length: 600,
				distance: 75,
				race: {
					2: { distance: 79.01 }, // M.Helf: 
					3: { distance: 92.36 } // F.Helf: 92.357
				}
			},
			1: {
				length: 600,
				distance: 75,
				race: {
					2: { distance: 70.99 }, // M.Helf: 70.986
					3: { distance: 68.07 }, // F.Helf: 68.067
					5: { distance: 100.02 }, // F.Aman: 100.018
					9: { distance: 100.02 } // Elin: 100.018
				}
			},
			2: {
				length: 1500,
				distance: 120,
				race: {
					3: { distance: 109.58 }, //F.Helf: 109.576
					5: { distance: 94.98 }, // F.Aman: 94.983
					6: { distance: 150 }, // M.Casta: 150
					8: { distance: 112.42 }, // Popori: 112.417
					9: { distance: 104.82 } // Elin: 104.818
				}
			}
		},
		15: { // Startling Kick
			0: {
				length: 1500,
				distance: -175,
				//forceClip: true,
				glyphs: {
					23060: { speed: 1.25 }
				},
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
		    }
		},
		16: { // Fury Strike
			0: {
				length: 1000,
				distance: 100,
				race: {
					0: { distance: 96.26 }, // M.Human: 96.255
					1: { distance: 120.75 }, // F.Human: 120.753
					2: { distance: 103.85 }, // M.Helf: 103.848
					3: { distance: 91.79 }, // F.Helf: 91.787
					4: { distance: 100 }, // M.Aman: 100
					5: { distance: 96.25 }, // F.Aman: 96.25
					6: { distance: 135.85 }, // M.Casta: 135.847
					7: { distance: 140 }, // F.Casta: 140
					8: { distance: 141.74 }, // Popori: 141.738
					9: { distance: 142.53 }, // Elin: 142.53
					10: { distance: 100 } // Baraka: 100
				}
			}
		},
		17: { // Headlong Rush
			0: {
				type: 'dash', 
				fixedSpeed: 1,
				length: 1000,
				distance: 413,
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			}
		},
		18: { // Overpower (Awakening Patch)
			'*': {
				length: 1433,
				noInterrupt: [1, 2, 3, 4, 6, 9, 12, 13, 14, 15, 16, 17, 21, 23, 25, 26, 27, 28]
			},
			0: true,
			50: true
		},
		19: { // Tenacity
			0: {
				fixedSpeed: 1,
				length: [500, 700]
			}
        },
		20: { // In Cold Blood
			0: {
				triggerAbnormal: { 23220: 2000 },
				fixedSpeed: 1,
				length: 1185
			}
		},
		21: { // Exhausting Blow
		    0: {
				length: 1175,
			    distance: 75
			},
		},
		23: { // Measured Slice
			'*': {
				distance: 189, // Sometimes 190 but most of the time 189
				races: {
					5: { distance: 190}, // F.Aman
					10: { distance: 190 } // Baraka
				},
				noRetry: true,
				consumeAbnormalEnd: 301604
			},
			0: {
				length: 3685,
				noInterrupt: [1, 2, 3, 4, 6, 9, 10, 12, 13, 14, 15, 16, 17, 21, 22, 23, 26, 28],
				chains: {
					8: 30,
					24: 30,
					25: 30,
					27: 30
				},
				abnormals: { 301604: { chain: 30 } }
			},
			30: { length: 1690 } // Maybe 1675~1700
 		},
		24: { // Eviscerate
			'*': {
				noRetry: true,
				consumeAbnormalEnd: 301604
			},
			0: {
				length: 1925,
				distance: 50,
				noInterrupt: ['1-0', '1-1', '1-2', 4, 6, 10, 14, 16, 17, 21, 22, 23, 24, 26, 28],
				chains: {
					1: 30,
					2: 30,
					3: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					15: 30,
					25: 30,
					27: 30
				},
				abnormals: { 301604: { chain: 30 } }
			},
			30: {
				 length: 1525,
				 distance: 100
			}
		},
		25: { // Ultimate Overhand Strike
			'*': {				
				distance: 169.5,
				noRetry: true,
				race: {
					0: { distance: 171.14 }, // M.Human: 171.138
					1: { distance: 171.14 }, // F.Human: 171.138
					2: { distance: 171.14 }, // M.Helf: 171.138
					3: { distance: 152.19 }, // F.Helf: 152.194
					4: { distance: 145 }, // M.Aman: 145
					5: { distance: 134.53 }, // F.Aman: 134.532
					6: { distance: 161.14 }, // M.Casta: 161.138
					7: { distance: 170 }, // F.Casta: 170
					8: { distance: 150 }, // Popori: 150
					9: { distance: 169.65 }, // Elin: 169.648
					10: { distance: 151.14 } // Baraka: 151.138
				},
				consumeAbnormalEnd: 301604
			},
			0: { length: 3365 },
			30: { length: 1325 }
		},
		26: { // Decimate(EU), Punishing Blow(NA)
			0: {
				length: [1078, 2166, 120],
				distance: [40.51, 122.33, 11.21],
				noRetry: true,
				chains: {
					8: 30,
					23: 30,
					24: 30,
					25: 30,
					27: 30
				},
				abnormals: { 301604: { chain: 30 } },
				noInterrupt: [1, 2, 3, 4, 6, 9, 10, 12, 13, 14, 15, 16, 17, 21, 22, 26, 28],
				consumeAbnormalEnd: 301604
			}, // super cancel 
			30: {
				length: [1710, 0],
				distance: [122, 22]
			}
		},
		27: { // Blazing Thrust(EU), Savage Strike(NA)
			'*': {
				noRetry: true,
				noInterrupt: ['27-31'],
				abnormals: {
					301603: { chain : 31 }
				}
			},
			0: {
				length: [625, 1000, 1316.25],
				distance: [0, 274.69, 0.91],
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30, // i assume retaliate can chain into this too
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					22: 30,
					23: 30,
					24: 30,
					25: 30,
					26: 30,
					'28-1': 30,
					'28-2': 30,
					'28-3': 30
				},
				triggerAbnormal: {
					301604: 5000,
					301603: 5000
				}
			},
			30: {
				length: [1000, 1316.25],
				distance: [274.8, 0],
				triggerAbnormal: {
					301604: 5000,
					301603: 5000
				}
			},
			31: {
				length: 751.25,
				distance: 275.6,
				consumeAbnormal: 301603,
				triggerAbnormal: {
					301604: 5000
				}
			}
		},
		28: { // Unsheathe
			0: {
				type: 'charging',
				noRetry: true,
				length: [650, 650],
				noInterrupt: [28],
				consumeAbnormal: [301601, 301604],
				abnormals: {
					301604: { chargeSpeed: 0.4 },
					301601: { chargeSpeed: 0.6 }
				}
			},
			1: {
				type: 'chargeCast',
				distance: [44.814, 0],
				length: [1248, 1]
			},
			2: {
				type: 'chargeCast',
				distance: [44.814, 0],
				length: [1248, 1]
			},
			3: {
				type: 'chargeCast',
				distance: [44.814, 0],
				length: [1248, 1]
			}
		},
		910: { // Awakening Eyes Aura(EU), Apex Urgency(NA)
			0: { length: 500 }
		}
	},
	3: { // Berserker
		1: { // Combo Attack
			'*': { noInterrupt: [1, 2, 4] },
			0: {
				length: 1155,
				distance: 78,
				race: {
					0: { distance: 58.1 }, // M.Human: 58.10235
					1: { distance: 61.96 }, // F.Human: 61.9559364
					3: { distance: 63.24 }, // F.Helf: 63.236
					4: {	// M.Aman
						length: 1110,
						distance: 27.72	// 27.715
					},
					6: { distance: 55.69 }, // M.Casta: 56.687
					8: { distance: 48.89 }, // Popori: 48.886
					9: {	// Elin: 1110, 78.005
						length: 1110,
						distance: 78
					},
					10: { distance: 44.22 } // Baraka: 44.217
				}
			},
			1: {
				length: 925,
				distance: 21.05,
				race: {
					0: { distance: 23.28 }, // M.Human: 23.28463
					1: { distance: 23.28 }, // F.Human: 23.28463
					3: { distance: 27.38 }, // F.Helf: 27.382
					4: { distance: 25 },	// M.Aman: 25
					6: { distance: 23.27 }, // M.Casta: 23.274
					8: { distance: 7.06 }, // Popori: 7.06
					9: { distance: 21.05 }, // Elin: 21.05
					10: { distance: 21.09 } // Baraka: 21.085
				}
			},
			2: {
				length: 1125,
				distance: 31.84,
				race: {
					0: { distance: 22.83 }, // M.Human: 22.8330917
					1: { distance: 22.83 }, // F.Human: 22.83308
					3: { distance: 32.47 }, // F.Helf: 32.474
					4: { distance: 25 }, // M.Aman: 25
					6: { distance: 22.83 }, // M.Casta: 22.833
					8: { distance: 40.93 }, // Popori: 40.926
					9: { distance: 31.84 }, // Elin: 31.842
					10: { distance: 20.68 } // Baraka: 20.676
				}
			},
			3: {
				length: 1825,
				distance: 54.28,
				race: {
					0: { distance: 69.26 }, // M.Human: 69.2654953
					1: { distance: 70.41 }, // F.Human: 70.41038
					3: { distance: 55.25 }, // F.Helf: 55.251
					4: {	// M.Aman
						length: 2000,
						distance: 45
					},
					6: { distance: 59.47 }, // M.Casta: 59.467
					8: { distance: 43.68 }, // Popori: 43.68
					9: { distance: 54.29 }, // Elin: 54.285
					10: { distance: 63.26 } // Baraka: 63.257
				}
			}
		},
		2: { // Axe Block
		    '*': {
				type: 'holdInfinite',
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			},
			0: { fixedSpeed: 1 },
			30: true,
			31: { fixedSpeed: 1 }
		},
		3: { // Thunderstrike
			'*': {
				type: 'chargeCast',
				length: 1748,
				abnormals: { 24170: { speed: 1.25 } }
			},
			0: {
				type: 'charging',
				length: [650, 650, 650],		// 2300, Overcharge hold charge time: 2515 | Charge hold time is fixed, so therefore the more attack speed you have the more free time you have after a fully charging to reposition.
				noInterrupt: [2, 4, 10, 15, 18, 24, 25, 30], // Maximum Over Charge hold time = (overChargeLength * 1 + ChargingSpeed from glyphs) + (overChargeLength * 1)
				glyphs: { // SP doesn't apply this but it isn't too off from what it actually is.
					24067: { chargeSpeed: 0.25 } // Only these affect charge hold time
				},
				abnormals: {
					24130: { chargeSpeed: 0.3 },
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
					4010150: { chargeSpeed: 0.2 }
				},
				level: [
					{ length: 800 },	// 2300
					{ length: [800, 800] },	// 2300
					{ length: [800, 800] }	// 2300
				]
			},
			10: {
				distance: 87.28, // 87.272 Cast F. - TODO
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					3: { distance: 90.98 }, // F.Helf: 90.983
					4: { distance: 35 }, // M.Aman: 35
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				}			
			}, 
			11: {
				distance: 87.28, // 87.272
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					3: { distance: 90.98 }, // F.Helf: 90.983
					4: { distance: 35 }, // M.Aman: 35
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				}
			},
			12: {
				distance: 87.28, // 87.272
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					3: { distance: 90.98 }, // F.Helf: 90.983
					4: { distance: 35 }, // M.Aman: 35
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				}		
	        },
			13: {
				6: { distance: 69.704 }, // M.Casta, 69.704
				distance: 87.28, // 87.272
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					3: { distance: 90.98 }, // F.Helf: 90.983
					4: { distance: 35 }, // M.Aman: 35
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				},
				canVB: true
			}
		},
		4: { // Flatten
			'*': {
				length: 3111.8, // 3120 pori?
				distance: 105.685,
				glyphs: {
					24008: { speed: 1.25 },
					24050: { speed: 1.25 }
				},
				abnormals: {
					24100: { speed: 1.25 },
					24101: { speed: 1.30 }
				},
				race: {
					3: { distance: 90.6 }, // F.Helf: 90.601
					4: { distance: 80 }, // M.Aman: 80
					6: { distance: 75 }, // M.Casta: 75
					8: { distance: 73.34 }, // Popori: 73.344
					9: { distance: 105.69 }, // Elin: 105.685
					10: { distance: 70.23 } // Baraka: 70.227
				}
			},
			0: {
				noInterrupt: [1, 2, '3-10', '3-11', '3-12', '3-13', 4, '8-30', '10-10', '10-11', '10-12', 11, '10-13', 12, 13, '15-10', '15-11', '15-12', '15-13', '15-14', 18, 24, 27, 28, 29, 30, '32-0'],
				abnormals: {
					401400: { chain: 1 }
				},
				chains: {
					6: 30,
					25: 30,
					32: 31,
					31: 30,
				}
			},
			1: true,
			30: {
				abnormals: {
					401400: { chain: 31 }
				},
				length: 2336.55
			},
			31: { length: 2336.55 }
		},
		5: { // Dash
			0: {
				fixedSpeed: 1,
				length: 700,
				noInterrupt: [2],
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' }
				}
			}
		},
		6: { // Sweeping Strike
			'*': {
				length: 1293.63,
				distance: 80.47,
				noRetry: true,
				race: {
					2: {
						length: 1384.54,	// M.Helf
						distance: 82.33
					},
					3: { distance: 71.34 }, // F.Helf: 71.336
					4: { distance: 50.07 }, // M.Aman: 50.071
					6: { distance: 66.21 }, // M.Casta: 66.21
					8: { distance: 53.41 }, // Popori: 53.412
					9: {
						length: 1263.63,	// Elin: 80.468
						distance: 80.47
					},
					10: { distance: 70 } // Baraka: 70
				}
			},
			0: { 
				noInterrupt: [2],
			    interruptibleWithAbnormal: {
				    401404: [2]
				},
				abnormals: {
					401404: { chain: 30 }
				}
		    },
			1:  true,
			30: true,
		},
		8: { // Fiery Rage
			'*': { noInterrupt: [2] },
			0: {
				fixedSpeed: 1,
				length: [454.54, 596.81]
			},
			30: { 
				length: 1742.34, // /Need M.Casta
				requiredBuff: 401400,
				race: {
					7: { length: 1767.34 } // F.Castanic
				}
		    }
		},
		10: { // Cyclone
			'*': { type: 'chargeCast' },
			0: {
				type: 'charging',
				length: [650, 650, 650],		// 2300
				interruptibleWithAbnormal: { 401720: [10] },
				abnormals:{
					401720: { chain : null }
				},
				consumeAbnormal: 401720,
				glyphs: {
					24009: { chargeSpeed: 0.25 },
					24052: { chargeSpeed: 0.25 },
					24096: { chargeSpeed: 0.3 }
				},
				abnormals: {
					24010: { chargeSpeed: 0.3 },
					24190: { chargeSpeed: 0.3 },
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
					4010150: { chargeSpeed: 0.2 },
					401400: { chain: 'invalid' }
				},
				level: [
					{ length: 800 },	// 2300
					{ length: [800, 800] },	// 2300
					{ length: [800, 800] }	// 2300
				]
			},
			10: {
				length: 1333, // Cast F. - TODO
				distance: 50,
				races: {
					2: { length: 1400 }, // M.Helf
					3: { length: 1800 }, // F.Helf,
					6: { length: 1366 }, // M.Castanic
				}
			},
			11: {
				length: [366, 366, 1333],
				distance: [33.33, 33.33, 50],
				races: {
					2: { length: [366, 366, 1400] }, // M.Helf
					3: { length: [366, 366, 1800] }, // F.Helf
					6: { length: [366, 366, 1366] } // M.Castanic
				}
			},
			12: {
				length: [366, 366, 366, 366, 1333],
				distance: [33.33, 33.33, 33.33, 33.33, 50],
				races: {
					2: { length: [366, 366, 366, 366, 1400] }, // M.Helf
					3: { length: [366, 366, 366, 366, 1800] }, // F.Helf
					6: { length: [366, 366, 366, 366, 1366] } // M.Castanic
				}
			},
			13: {
				length: [366, 366, 366, 366, 1333],
				distance: [33.33, 33.33, 33.33, 33.33, 50],
				races: {
					2: { length: [366, 366, 366, 366, 1400] }, // M.Helf
					3: { length: [366, 366, 366, 366, 1800] }, // F.Helf
					6: { length: [366, 366, 366, 366, 1366] } // M.Castanic
				},
				canVB: true
			}
		},
		11: { // Leaping Strike 
			0: {
				length: 2191.25,
				distance: 250,
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				noInterrupt: [2]
			}
		},
		13: { // Retaliate (TODO: Check)
			0: {
				type: 'retaliate',
				length: 1625,
				noInterrupt: [2],
				noRetry: true
			}
		},
		15: { // Vampiric Blow 
            '*': {    // Same animation as thunder strike, just slower                        
				type: 'chargeCast',
				length: 1930,
			}, // Chained VB Usage: "Show default Chained Skills" in the Chained Skills menu is strongly advised to be turned off       		                               
            0: {
                type: 'charging',
				length: [800, 800, 800],		// 2300
				noInterrupt: [2, '3-0', 4, '10-0', '15-14', 18, 24, 25, 30],
				abnormals: {
					400500: { chargeSpeed: 0.2 },
					400501: { chargeSpeed: 0.4 },
					4010150: { chargeSpeed: 0.2 }
				},
				chains: {
                    '3-13': 14,
                    '10-13': 14,
                },
				level: [
					{ length: 800 },	// 2300
					{ length: [800, 800] },	// 2300
					{ length: [800, 800] }	// 2300
				]
            },
            10: {
				distance: 87.28, // 87.272
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					3: { distance: 72.79 }, // F.Helf: 72.785
					4: { distance: 35 }, // M.Aman: 35
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				}
			},
            11: {
				distance: 87.28, // 87.272
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					3: { distance: 72.79 }, // F.Helf: 72.785
					4: { distance: 35 }, // M.Aman: 35
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				}
			},
            12: {
				distance: 87.28, // 87.272
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					3: { distance: 72.79 }, // F.Helf: 72.785
					4: { distance: 35 }, // M.Aman: 35
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				}
			},
            13: {
				distance: 87.28, // 87.272
				noInterrupt: [2, 4, 24, 25, 30],
				race: {
					3: { distance: 72.79 }, // F.Helf: 72.785
					4: { distance: 35 }, // M.Aman: 35
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				}
			},
            14: { 
				distance: 87.28, // 87.272
				race: {
					3: { distance: 72.79 }, // F.Helf: 72.785
					4: { distance: 35 }, // M.Aman: 35
					6: { distance: 69.7 }, // M.Casta: 69.704
					8: { distance: 69.51 }, // Popori: 69.513
					9: { distance: 87.27 }, // Elin: 87.272
					10: { distance: 64.88 } // Baraka: 64.884
				}
			}
		},
		16: { // Fearsome Shout
		    0: {
				fixedSpeed: 1,
				length: [700, 1425],
				noInterrupt: [2]
			}
		},
		18: { // Lethal Strike (Awakening patch)
			'*': {
				length: 687.5,
				distance: 167.63,
				abnormals: {
					//24120: { speed: 1.3 },	//broken in this patch
					401400: { chain: 'invalid' }
				},
				noInterrupt:[1, 4, 6, 13, 18, 24, 25, 26, 28, 29, 31],
				chains: {
					'3-10': 30,
					'3-11': 30,
					'3-12': 30,
					'3-13': 30,
					'10-10': 30,
					'10-11': 30,
					'10-12': 30,
					'10-13': 30,
					11: 30,
					'15-10': 30,
					'15-11': 30,
					'15-12': 30,
					'15-13': 30,
					'15-14': 30
				},
				race: {
					6: { distance: 168.11 }, // M.Casta: 168.112
					8: { distance: 240.4 }, // Popori: 240.4
					9: { distance: 167.62 }, // Elin: 167.624
					10: { distance: 158.11 } // Baraka: 158.112
				}
			},
			0: true,
			30: { length: 550 }
		},
		19: { // Triumphant Shout (Awakening patch)
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
			'*': {	// Same animation as lethal strike cast, just slower
				length: 1833,
				distance: 167.63, // 167.624
				race: {
					6: { distance: 168.11 }, // M.Casta: 168.112
					8: { distance: 240.4 }, // Popori: 240.4
					9: { distance: 167.62 }, // Elin: 167.624
					10: { distance: 158.11 } // Baraka: 158.112
				}
			},
			0: {
				length: 1020.9,
				distance: 150,
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' }
				}
			},
			10: { noInterrupt: [2, 3, 4, 10, 15, 18, 25, 30] },
			11: { noInterrupt: [2, 3, 4, 10, 15, 18, 25, 30] },
			12: { noInterrupt: [2, 3, 4, 10, 15, 18, 25, 30] },
			13: { noInterrupt: [2, 3, 4, 10, 15, 18, 25, 30] }
		},
		25: { // Raze
			'*': { 
				length: 1200,
				distance: 96,
				glyphs: {
					24078: { speed: 1.25 }
				}
			},
			0: {
				noInterrupt: [2, 4, 6, '8-30', 11, 13, 18, 24, 25, 26, 27, 28, 29, '32-0'],
				interruptibleWithAbnormal: { 
					401404: [2]
				}, 
				abnormals: {
					401404: { chain: 31 }
				},
				chains: {
					1: 30,
					3: 30,
					10: 30,
					15: 30,
					30: 31,
					31: 30,
					32: 31
				}
			},
			1: true,
			30: {
				length: 965,
				abnormals: { 401400: { chain: 31 } },
			},
			31: { length: 965 }
		},
		26: { // Tackle
			0: {
				length: 1000,
				distance: 80,
				noInterrupt: [2]
			}
		},
		27: { // Unbreakable /Need M.Casta
			0: { 
				length: 2100,
				noInterrupt: [1, 2, '3-10', '3-11', '3-12', '3-13', 4, 6, '8-30', '10-10', '10-11', '10-12', '10-13', 11, 13, '15-10', '15-11', '15-12', '15-13', '15-14', 18, 24, 25, 26, 27, 28, 29, 30, 31, 32],
				abnormals: { 401705: { chain: 30 } }
			},
			30: {
				length: 1450
			}
		},
		28: { // Intimidation /Need M.Casta
		    '*': {
				length: 1566,
				noInterrupt: [2],
				race: {
					7: { length: 1599 } // F.Castanic
				}
			},
			0: true,
			50: true
		},
		29: { // Evasive Roll (TODO: Check)
			0: {
				length: 909.1,
				distance: 150,
				//forceClip: true,
				noInterrupt: [2, 29],
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			}
		},
		30: { // Axe Counter (TODO: Check) /need M.Casta
		    '*': {
				length: 655.33,
				distance: 21.05,
				noInterrupt: [1, '3-10', '3-11', '3-12', '3-13', 4, 6, '8-30', '10-10', '10-11', '10-12', '10-13', 11, 13, '15-10', '15-11', '15-12', '15-13', '15-14', 18, 24, 25, 26, 27, 28, 29, 30, 31, 32],
				requiredBuff: 401402,
				race: {
					5: { // F.Aman
						length: 677.33,
						distance: 24.5
					},
					8: { // Popori, just WTF
						length: 1188.66,
						distance: 240.4
					},
					9: { distance: 21.05 }, // Elin: 21.05
					10: { distance: 21.08 } // Baraka: 21.084
				}
			},
			0: { abnormals: { 401402: { chain: 30 } } },
			30: true
		},
		31: { // Overwhelm (TODO: Check)
			0: {
				type: 'dash',
				fixedSpeed: 1,
				length: 1115,
				distance: 470,
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				noInterrupt: [2],
				noRetry: true
			},
			1: { 
				length: 1510.83,
			    noInterrupt: [2],
				race: {
					9: { length: 1344 } // Elin
				}
            }
		},
		32: { // Punishing Strike (TODO: Check) /Need M.Casta
			'*': {
				noInterrupt: [2],
				requiredBuff: 401400
			},
			0: {
				length: 771.53,
				distance: 31.58,
				race: {
					4: { // M.Aman
						length: 760,
						distance: 37.5
					},
					5: { // F.Aman
						length: 796.92,
						distance: 24.5
					},
					8: { // Popori: 930, 61.387
						length: 925.4, 
						distance: 61.39
					},
					9: { distance: 31.58 }, // Elin: 31.575
					10: { distance: 31.63 } // Baraka: 31.628
				}
			},
			1: {
				length: 800,
				distance: 134.1,
				race: {
					4: { distance: 116 }, // M.Aman
					8: { distance: 192.32 }, // Popori: 192.319
					9: { distance: 134.1 }, // Elin: 134.1
					10: { distance: 126.49 } // Baraka: 126.49
				}
			}
		},
		33: { // Unleash
			0: { length: [700, 1500, 1766] },
		},
		34: { // Unleash: Dexter
			'*': {
				length: [600, 833, 833],
				distance: [0, 27.5, 0],
				noRetry: true,
				requiredBuff: 401705,
				abnormals: {
					//401706: { speed: 1.2 }, // no effect
					401716: { chain: 31 }
				}
			},
			0: {
				noInterrupt: [34, 36],
				chains: { // x3 to 30
					33: 30,
					35: 30,
					37: 30
				}
			},
			1: true,
			30: {
				length: [833, 833],
				distance: [27.5, 0]
			},
			31: {
				length: [833, 833],
				distance: [27.5, 0]
			}
		},
		35: { // Unleash: Sinister
			'*': {
				length: [1133, 833],
				distance: [198, 0],
				requiredBuff: 401705,
				abnormals: {
					401707: { speed: 1.2 },
					401717: { chain: 31 }
				},
				noRetry: true
			},
			0: {
				noInterrupt: [35, 36, 37],
				chains: {
					33: 1,
					34: 30
				}
			},
			1: true,
			30: {
				length: [625, 833],
				distance: [27.5, 0]
			},
			31: {
				length: [625, 833],
				distance: [27.5, 0]
			}
		},
		36: { // Unleash: Rampage
			'*': {
				length: 1588.6,
				distance: 38.5,
				requiredBuff: 401705,
				abnormals: {
					401708: { speed: 1.2 },
					401718: { chain: 31 }
				},
				noRetry: true
			},
			0: {
				length: 2714.4,
				noInterrupt: [37],
				chains: { // x 3 to 30
					34: 30,
					35: 30,
					36: 30
				}
			},
			30: true,
			31: true
		},
		37: { // Unleash: Beast Fury
			'*': {
				// race difference is a thing
				length: [610.8, 694, 721.6, 471.66, 1194],
				distance: [126, 144.824, 151.1, 9.4, 98.64],
				noInterrupt: [37],
				requiredBuff: 401705
			},
			0: {
				chains: {
					33: 30,
					34: 30,
					35: 30,
					36: 30
				}
			},
			30: true
		},
		910: { // Awakening Eyes Aura(EU), Apex Urgency(NA)
			0: { length: 500 }
		}
	},
	4: { // Sorcerer
		1: { // Fireball
			0: { length: 730 }
		},
		2: { // Frost Sphere
			0: {
				length: 800,
				race: {
					4: { length: 1250 }, // Male Aman
					9: { length: 1000 }, // Elin
					10: { length: 900 } // Baraka
				}
			}
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
				length: 1285,
				race: {
					9: { length: 1015 } // Elin
				}
			},
			0: {
				type: 'charging',
				length: [800, 800],
				noInterrupt: [7, 26],
				abnormals: {
					25140: { chargeSpeed: 0.3 }
				}
			},
			10: {
				noInterrupt: [7, 26],
				level: {
					11: { 
						abnormals: {
							500150: { skill: 330110 },
							501650: { skill: 330150 }
						}
					}
				}
			},
			11: {
				noInterrupt: [7, 26],
				level: {
					11: { 
						abnormals: {
							500150: { skill: 330111 },
							501650: { skill: 330151 }
						}
					}
				}
			},
			12: {
				noInterrupt: [7, 26],
				level: {
					11: { 
						abnormals: {
							500150: { skill: 330112 },
							501650: { skill: 330152 }
						}
					}
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
				},
				race: {
					9: { length: 3700 } // Elin
				},
				level: {
					9: {
						abnormals: { 
							500150: { skill: 320100 },
							501650: { skill: 320150 }
						}
					}
				}
			}
		},
		7: { // Backstep
			0: {
				length: 660,
				distance: -200,
				//forceClip: true,
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
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
			0: {
				length: 870,
				race: {
					9: { length: 810 } // Elin
				}
			}
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
			0: {
				length: 1590,
				race: {
					9: { length: 1330 } // Elin
				}
			}
		},
		17: { // Painful Trap
			0: { length: 1100 }
		},
		18: { // Glacial Retreat
			0: {
				length: 1100,
				distance: -187.5,
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				//forceClip: true
			}
		},
		19: { // Mana Siphon
			'*': {
				type: 'chargeCast',
				length: 900
			},
			0: {
				type: 'charging',
				length: [1000, 1000],	// 400
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
				noRetry: true,
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			}
		},
		27: { // Hailstorm
			0: {
				length: 980,
				abnormals: {
					902: { speed: 1.15 },
					911: { speed: 1.15 },
					912: { speed: 1.15 },
					913: { speed: 1.15 },
					916: { speed: 1.15 },
					917: { speed: 1.15 },
					920: { speed: 1.225 },
					921: { speed: 1.225 },
					922: { speed: 1.225 },
					929: { speed: 1.225 }
				}
			}
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
			'*': { 
				length: 475,
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			},
			0: true,
			10: true,
			20: true
		},
		32: { // Meteor Shower
			'*': {
				length: 6775,
				glyphs: {
					25003: { speed: 1.17 },
					25069: { speed: 1.25 }
				},
				noRetry: true,
				race: {
					9: { length: 6475 } // Elin
				}
			},
			0: true,
			50: {
				length: 3925,
			    race: {
					9: { length: 3700 } // Elin
				}
			}
		},
		33: { // Arcane Pulse (Mana Boost)
			'*': {
				type: 'chargeCast',
				length: 1285,
				noRetry: true,
				race: {
					9: { length: 1015 } // Elin
				}
			},
			10: true,
			11: true,
			12: true,
			50: true,
			51: true,
			52: true	//not sure, may need like 500 AttSpd to test
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
				noInterrupt: [22],
				noRetry: true,
				length: 4900
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
				length: 1760,
				races: {
					1: { length: 1600 }	// F.Human
				}
			},
			0: {
				type: 'charging',
				length: [600, 600, 600],	// 2700
				noInterrupt: [4, 22],
				abnormals: {
					26180: { chargeSpeed: 0.3 },
					601450: { chargeSpeed: 0.5 }
				},
				level: [
					{ length: 600 },	// 2800
					{ length: [600, 600] },	// 2800
					{ length: [600, 600] },	// 2800
				]
			},
			10: { 
				distance: -100,
				noInterrupt: [22],
				race: {
					8: { distance: -90.6 } // Popori, 90.604
				}
			}, // Cast F. - TODO
			11: { 
				distance: -100,
				noInterrupt: [22],
				race: {
					8: { distance: -90.6 } // Popori, 90.604
				}
			},
			12: { 
				distance: -100,
				noInterrupt: [22],
				race: {
					8: { distance: -90.6 } // Popori, 90.604
				}
			},
			13: { 
				distance: -100,
				noInterrupt: [22],
				race: {
					8: { distance: -90.6 } // Popori, 90.604
				}
			}
		},
		4: { // Penetrating Arrow
			'*': {
				type: 'chargeCast',
				length: 1315,
				races: {
					1: { length: 1275 }	// F.Human
				}
			},
			0: {
				type: 'charging',
				length: [800, 800, 800],	// 2800
				noInterrupt: [3, 22],
				abnormals: {
					26160: { chargeSpeed: 0.3 },
					26170: { chargeSpeed: 0.3 },
					26171: { chargeSpeed: 0.4 },
					26190: { chargeSpeed: 0.3 },
					601450: { chargeSpeed: 0.5 }
				},
				level: [
					{ length: 1000 },	// 2800
					{ length: [1000, 1000] },	// 2800
					{ length: [1000, 1000] },	// 2800
				]
			},
			10: { 
				distance: -50,
				noInterrupt: [22],
				race: {
					1: { distance: -80 }, // F.Human
					8: { distance: -48.69 } // Popori, 48.688
				}
			}, // Cast F. - TODO
			11: { 
				distance: -50,
				noInterrupt: [22],
				race: {
					1: { distance: -80 }, // F.Human
					8: { distance: -48.69 } // Popori, 48.688
				}
		    },
			12: { 
				distance: -50,
				noInterrupt: [22],
				race: {
					1: { distance: -80 }, // F.Human
					8: { distance: -48.69 } // Popori, 48.688
				}
			},
			13: { 
				distance: -50,
				noInterrupt: [22],
				race: {
					1: { distance: -80 }, // F.Human
					8: { distance: -48.69 } // Popori, 48.688
				}
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
					912: { speed: 1.15 },
					913: { speed: 1.15 },
					916: { speed: 1.15 },
					917: { speed: 1.15 },
					920: { speed: 1.225 },
					921: { speed: 1.225 },
					922: { speed: 1.225 },
					929: { speed: 1.225 }
				}
			}
		},
		6: { // Backstep
			0: {
				length: 670,
				distance: -200,
				//forceClip: true,
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			}
		},
		7: { // Feign Death
			0: {
				fixedSpeed: 1,
				length: [2950, 54525, 1675],
				distance: [-114.05, 0, 0]
			}
		},
		8: { // Rapid Fire
			'*': { 
				noRetry: true,
				noInterrupt: [22] // this actually doesn't do anything
			},
			0: { 
				length: 433, // 445
				noInterrupt: [6] 
			},
			1: { length: 600 },
			2: { length: 700 },
			3: { length: 800 },
			4: { length: 700 },
			5: { length: 800 },
			6: { length: 1233 } // 1240
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
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				//forceClip: true
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
				distance: 89.8	// 89.797
			},
			1: {
				length: 1200,
				distance: 87.29	// 97.292
			}
		},
		19: { // Poison Arrow
			0: { 
				length: 1125,
				distance: -12.5,
				noInterrupt: [22],
				race: {
					8: { distance: -12.17 } // Popori, 12.167
				}
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
				length: 440,
				requiredBuff: 600200,
				noRetry: true,
				noInterrupt: [22]
			}
		},
		23: { // Stunning Trap Arrow
			0: { length: 1450 } // 1440
		},
		25: { // Incendiary Trap Arrow
			0: { length: 1225 } // 1215
		},
		29: { // Thunderbolt
			0: {
				length: 3750,
				distance: -100,
				noInterrupt: [22],
				glyphs: {
					26089: { speed: 1.3 },
					26102: { speed: 1.3 }
				},
				race: {
					1: { length: 3575 }, // F.Human
					8: { distance: -96.6 } // Popori, -96.604
				}
			}
		},
		31: { // Tenacity
			0: {
				fixedSpeed: 1,
				length: [500, 720] // 700
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
				length: 1075, // 1000
				distance: 413, // 412.078
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' }
				}
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
		2: { // Regeneration Circle (Awakening patch)
			0: {
				length: 2165.63,
				abnormals: {
					902: { speed: 1.15 },
					911: { speed: 1.15 },
					912: { speed: 1.15 },
					913: { speed: 1.15 },
					916: { speed: 1.15 },
					917: { speed: 1.15 },
					920: { speed: 1.225 },
					921: { speed: 1.225 },
					922: { speed: 1.225 },
					929: { speed: 1.225 },
					805800: { chain: 'invalid' }
				}
			}
		},
		3: { // Healing Circle (Awakening patch)
			'*': {
				abnormals: { 805800: { chain: 'invalid' } },
				noInterrupt: [2, 3, 5, 10, 12, 14, 18, 25, 27, 28, '30-10', '33-10', 34, '35-10', '37-10', '41-10', 42]
			},
			0: {
				length: 1750,
				chains: {
					'19-10': 30,	// Focus heal->Healing circle, need to confirm this chain
					26: 30,
					38: 30
				}
			},
			30: {
				length: 1480.76
			}
		},
		5: { // Blessing of Shakan (Awakening patch)
			0: { length: 1293.63 }
		},
		6: { // Arise
			0: { length: 839 }
		},
		8: { // Mana Infusion
			0: {
				length: 4595.5,
				glyphs: {
					28044: { speed: 1.25 }
				},
				abnormals: { 805800: { chain: 'invalid' } }
			}
		},
		10: { // Purifying Circle
			0: { length: 1294 }
		},
		11: { // Metamorphic Blast (Awakening patch)
			'*': {
				length: 820
			},
			0: true,
			1: true,
			2: true
		},
		12: { // Resurrect
			0: {
				length: 5915,
				glyphs: {
					28045: { speed: 1.15 }
				},
				abnormals: {
					902: { speed: 1.15 },
					911: { speed: 1.15 },
					912: { speed: 1.15 },
					913: { speed: 1.15 },
					916: { speed: 1.15 },
					917: { speed: 1.15 },
					920: { speed: 1.225 },
					921: { speed: 1.225 },
					922: { speed: 1.225 },
					929: { speed: 1.225 }
				}
			}
		},
		14: { // Summon: Party
			0: { length: 4500 }
		},
		16: { // Shocking Implosion (Awakening patch)
			'*': {
				length: 1718,
				noInterrupt: [2, 3, 5, 10, 12, 14, 16, 18, '19-10', 25, 26, 28, 29, '30-10', '33-10', 34, '35-10', '37-10', 38, 40, '41-10', 42],
			},
			0: {
				chains: {
					11: 30,
					27: 30
				}
			},
			10: {
				chains: {
					11: 11,
					27: 11
				}
			},
			11: { length: 1438.45 },
			20: {
				chains: {
					11: 21,
					27: 21
				}
			},
			21: { length: 1438.45 },
			30: { length: 1438.45 }
		},
		18: { // Heal Thyself
			0: { 
				length: 1250,
				abnormals: { 805800: { chain: 'invalid' } }
			}
		},
		19: { // Focus Heal
			'*': {
				noRetry: true,
				805800: { chain: 'invalid' }
			},
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 54445.45
			},
			10: {
				type: 'lockonCast',
				length: 1940
			}
		},
		22: { // Kaia's Shield
			0: {
				length: 650,
				abnormals: { 805800: { chain: 'invalid' } }
			}
		},
		26: { // Fiery Escape
			0: {
				length: 1125,
				distance: -250.5,
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				//forceClip: true
			}
		},
        27: { // Final Reprisal
            '*': {
                length: 2933,
				noRetry: true,
				noInterrupt: [2, 3, 5, 10, 12, 14, 18, '19-10', 25, 26, 27, 28, '30-10', '33-10', 34, '35-10', '37-10', 38, '41-10', 42],
                race: {
                    9: { length: 3333 }
                }
            },
            0: {
                chains: {
                    11: 30,
                    16: 30,
                    29: 30,
                    40: 30		// REALLY REALLY HARD TO DO ZENOBIA'S VORTEX->FINAL REPRISAL CHAIN IN THIS PATCH, I'VE NEVER SUCCEEDED EVEN ONCE.
                }
            },
            10: {
                chains: {
                    11: 11,
                    16: 11,
                    29: 11,
                    40: 11
                }
            },
            11: {
                length: 1113,
                race: {
                    9: { length: 1273 }
                }
            },
            20: {
				chains: {
					11: 21,
					16: 21,
					29: 21,
					40: 21
				}
			},
            21: {
                length: 1113,
                race: {
                    9: { length: 1273 }
                }
            },
            30: {
                length: 1113,
                race: {
                    9: { length: 1273 }
                }
            }
        },
		28: { // Words of Vitality(EU), Divine Charge(NA) (Mana Charge)
			'*': {
				type: 'chargeCast',
				length: 825,
				level: {
					1: { length : 700 }
				}
			},
			0: {
				type: 'charging',
				length: [800, 1600],	// 3500
				noInterrupt: [26, 27, 38],
				glyphs: {
					28031: { chargeSpeed: 0.25 }
				},
				level: {
					1: { length: [900, 900, 900] }
				}
			},
			10: true,
			11: true,
			12: true,
			13: true
		},
		29: { // Triple Nemesis
			0: { length: 810 },
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
				length: 1433
			}
		},
		31: { // Guardian Sanctuary
			0: {
				fixedSpeed: 1,
				length: 700,
				abnormals: { 805800: { chain: 'invalid' } }
			}
		},
		32: { // Divine Prayer
			0: {
				fixedSpeed: 1,
				length: [1300, 900],
				abnormals: { 805800: { chain: 'invalid' } }
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
				length: [300, 1433]
			}
		},
		34: { // Restorative Burst
			0: { length: 1433 }
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
				length: 1433
			}
		},
		37: { // Healing Immersion
			'*': {
				noRetry: true,
				abnormals: { 805800: { chain: 'invalid' } }
			},
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
				length: 1433,
				noInterrupt: ['37-10']
			}
		},
		38: { // Backstep
			0: {
				length: 665,
				distance: -200,
				noInterrupt: [26],
				//forceClip: true,
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			}
		},
		39: { // Grace of Resurrection
			0: { length: 5900 }
		},
		40: { // Zenobia's Vortex
			'*': {
				length: 1070.71,
				noRetry: true,
				noInterrupt: [40]
			},
			0: true,
			10: true,
			20: true
		},
		41: { // Divine Vitality(EU), Mass Divine Intervention(NA)
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 54445.45,
				partyOnly: true
			},
			10: {
				type: 'lockonCast',
				length: 933
			}
		},
		42: { // Holy Burst
			'*': { length: 800 },
			20: {
				abnormals: {
					805800: { chain: 30 }
				}
			},
			30: true
		},
		43: { // Words of Judgement(EU), Edict of Judgement(NA)
			0: { length: 1416 },
			50: { length: 200 }
		},
		910: { // Awakening Eyes Aura(EU), Apex Urgency(NA)
			0: { length: 500 }
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
				length: 10869,
				chainOnRelease: 11
			},
			11: { length: 835 }, // 840
			12: {
				length: 1300,
				race: {
					1: { length: 1224 }
				}
			}
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
			0: { length: 1294 }
		},
		8: { // Metamorphic Blast
			0: {
				length: 839,
				noInterrupt: [1, 2, 4, '5-10', 6, '9-10', 10, 13, 14, 15, 16, 17, 21, '18-10', '22-10', 37, '41-10', 43, 48],
				chains: {
					8: 30,
					23: 30
				}
			},
			30: { length: 839 }
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
				length: 8070, // 8050, 8060
				glyphs: {
					27049: { speed: 1.2 },
					27079: { speed: 1.2 }
				},
				abnormals: {
					902: { speed: 1.25 },
					911: { speed: 1.25 },
					912: { speed: 1.25 },
					913: { speed: 1.25 },
					916: { speed: 1.25 },
					917: { speed: 1.25 },
					920: { speed: 1.375 },
					921: { speed: 1.375 },
					922: { speed: 1.375 },
					929: { speed: 1.375 }
				}
			}
		},
		11: { // Summon: Party
			0: { length: 4445 }
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
				noRetry: true,
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			}
		},
		18: { // Arun's Vitae
			'*': { noInterrupt: [8, 17, 23] },
			0: {
				type: 'charging',
				length: 1240	// 450
			},
			10: {
				type: 'chargeCast',
				length: 800,
				abnormals: {
					27070: { chargeSpeed: 0.25 },
					27080: { chargeSpeed: 0.25 }
				},
				race: {
					9: { length: 833 }
				}
			}
		},
		21: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1633,
				noRetry: true
			}
		},
		22: { // Arun's Tears
		    '*': { noInterrupt: [8, 17, 23] },
			0: {
				type: 'charging',
				length: 1240	// 450
			},
			10: {
				type: 'chargeCast',
				length: 800, // 810 female high elf
				abnormals: {
					27100: { chargeSpeed: 0.25 }
				},
				race: {
					9: { length: 833 }
				}
			}
		},
		23: { // Metamorphic Smite
			0: {
				length: 1440,
				noInterrupt: [1, 2, 4, '5-10', 6, '9-10', 10, 13, 14, 15, 16, 17, '18-10', 21, '22-10', 23, 37, '41-10', 43, 48],
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
			'*': {
				fixedSpeed: 1,
				length: [1000, 1700]
			},
			0: true,
			10: true,
			30: { length: [500, 700] }
		},
		27: { // Thrall of Life
			'*': {
				fixedSpeed: 1,
				length: [229, 438]
			},
			0: true,
			10: true,
			30: { length: [500, 700] }
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
				length: 1400
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
				length: 1400
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
				length: 1400
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
				length: 1400
			}
		},
		33: { // Thrall of Vengeance
			'*': {
				fixedSpeed: 1,
				length: [267, 511]
			},
			0: true,
			10: true,
			30: { length: [500, 700] }
		},
		34: { // Thrall of Wrath
			'*': {
				fixedSpeed: 1,
				length: [1000, 1700]
			},
			0: true,
			10: true,
			30: { length: [500, 1200] }
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
				length: 1020
			}
		},
		42: { // Boomerang Pulse
			0: {
				length: 545, // 530, 550, 575
				noInterrupt: [42]
			}
		},
		43: { // Unsummon Thrall																																																																							
			0: { length: [400, 575] }
		},
		44: { // Mass Teleport
			0: {
				type: 'teleport',
				length: [222, 255],
				distance: [0, 333],
				noInterrupt: [17],
				teleportStage: 1,
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				noRetry: true
			}
		},
		45: { // Thrall Augumentation
			'*': { length: 91 },
			0: true,
			50: true
		},
		47: { // Arunic Release
			0: { length: 1060 }
		},
		48: { // Summon: Thrall Lord
			0: {
				fixedSpeed: 1,
				length: 4050,
				noRetry: true
			} // 4399 | 10239003
		},
		910: { // Awakening Eyes Aura(EU), Apex Urgency(NA)(EU)
			0: { length: 500 }
		}
	},
	8: { // Reaper
		'*' : { consumeAbnormal: [10151020, 10151021, 10151022, 10151023] },
		1: { // Spiral Barrage
			'*': {
				length: 1000,
				distance: 48,
				inPlace: {
					movement: [{
						duration: 766,
						speed: 1,
						unk: 1,
						distance: 0
					},
					{
						duration: 346,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				noInterrupt: [3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 20, 40],
				abnormals: {
					10151020: { chain: 2 },
					10151021: { chain: 3 },
					10151022: { chain: 4 },
					10151023: { chain: 5 }
				},
				chains: { 1: 1 },
				noRetry: true
			},
			0: { triggerAbnormal: { 10151020: 2000 } },
			1: { triggerAbnormal: { 10151020: 2000 } },
			2: {
				length: 1200,
				distance: 42,
				inPlace: {
					movement: [{
						duration: 950,
						speed: 1,
						unk: 1,
						distance: 0
					},
					{
						duration: 346,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: { 10151021: 2000 },
			},
			3: {
				length: 860,
				distance: 56,
				inPlace: {
					movement: [{
						duration: 616,
						speed: 1,
						unk: 1,
						distance: 0
					},
					{
						duration: 346,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: { 10151022: 1800 },
			},
			4: {
				length: 1400,
				distance: 60,
				inPlace: {
					movement: [{
						duration: 1150,
						speed: 1,
						unk: 1,
						distance: 0
					},
					{
						duration: 346,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				triggerAbnormal: { 10151023: 2000 },
			},
			5: {
				length: 1900,
				distance: 91,
				inPlace: {
					movement: [{
						duration: 2016,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				}
			}
		},
		3: { // Double Shear
			'*': {
				length: 2025,
				noInterrupt: ['1-0', '1-2', 3, 4, 12, 14, 20],
				abnormals: {
					29030: { speed: 1.25 }
				},
				chains: {
					1: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30
				}
			},
			0: true,
			30: true
		},
		4: { // Sundering Strike
			'*': {
				noInterrupt: [1, 4, 8, 9, 10, 11, 12, 14, 20],
				chains: {
					1: null,
					3: null,
					//4: null,
					5: null,
					6: null,
					8: null,
					9: null,
					10: null,
					11: null,
					12: null
				},
				noRetry: true
			},
			0: {
				length: [1175, 1750, 1025],
				distance: [0, 100, 0],
				inPlace: {
					movement: [
						[],
						[{
							duration: 1757,
							speed: 1,
							unk: 1,
							distance: 0
						}],
						[]
					],
					distance: [0, 0, 0]
				}
			},
			30: {
				length: [1750, 1025],
				distance: [100, 0],
				inPlace: {
					movement: [
						[{
							duration: 1757,
							speed: 1,
							unk: 1,
							distance: 0
						}],
						[]
					],
					distance: [0, 0]
				}
			}
		},
		5: { // Grim Strike
			'*': {
				distance: [120, 0],
				inPlace: {
					movement: [
						[{
							duration: 2416,
							speed: 1,
							unk: 1,
							distance: 0
						}],
						[{
							duration: 1065,
							speed: 1,
							unk: 1,
							distance: 0
						}]
					],
					distance: [0, 0]
				}
			},
			0: {
				length: [2400, 975],
				noInterrupt: ['1-0', '1-2', 4, 12, 14, 20],
				chains: {
					1: 30,
					3: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30
				}
			},
			30: { length: [1450, 975] }
		},
		6: { // Death Spiral
			'*': {
				length: 1250,
				abnormals: {
					10151131: { chain: 31 }
				},
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30
				},
				noRetry: true
			},
			0: { noInterrupt: ['6-31'] },
			30: true,
			31: true
		},
		8: { // Whipsaw
			'*': {
				length: 2500,
				noInterrupt: [4, 5, 6, 8, 9, 11, 12, 14, 20],
				chains: {
					1: 30,
					3: 30,
					10: 30
				}
			},
			0: true,
			30: true
		},
		9: { // Smite
			0: {
				length: 1725,
				distance: 168,
				inPlace: {
					movement: [{
						duration: 1832,
						speed: 1,
						unk: 1,
						distance: 0
					}],
					distance: 0
				},
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' }
				},
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 14, 20]
			}
		},
		10: { // Pendulum Strike
			'*': {
				length: 1000,
				distance: -200,
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				noInterrupt: [10],
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					11: 30,
					12: 30,
					14: 30
				}
			},
			0: true,
			30: true
		},
		11: { // Shadow Lash
			'*': {
				length: 1250,
				noRetry: true
			},
			0: {
				length: 2150, // Specific length for stage 0
				triggerAbnormal: { 10151040: 2000 },
				abnormals: {
					10151040: { chain: 1 },
					10151041: { chain: 2 },
					10151042: { chain: 3 }
				},
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, '11-3', 12, 13, 14, 15, 16, 18, 20, 40],
				interruptibleWithAbnormal: {
					10151040: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 40],
					10151041: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 40],
					10151042: [1, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 18, 20, 40]
				}
			},
			1: { 
				consumeAbnormal: 10151040,
				triggerAbnormal: { 10151041: 2000 }
			},
			2: { 
				consumeAbnormal: 10151041,
				triggerAbnormal: { 10151042: 2000 }
			},
			3: { consumeAbnormal: 10151042 }
		},
		12: { // Shadow Burst
			'*': {
				glyphs: {
					29026: { speed: 1.25 }
				}
			},
			0: {
				length: 3240,
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, 11, 14, 20],
				chains: {
					12: 1
				}
			},
			1: {
				length: 2040,
				noInterrupt: ['12-1']
			}
		},
		13: { // Soul Reversal
			0: {
				length: 600,
				distance: 6.84,
				noRetry: true,
				noInterrupt: [1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 14, 15, 16, 18, 20, 40],
				abnormals: {
					10151030: { chain: 'invalid' },
					10151034: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' },
					10151035: { chain: 40 },
					10151031: { chain: 30 }
				},
				interruptibleWithAbnormal: {
					10151031: [1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 14, 15, 16, 18, 20, 40]
				}
			},
			30: { length: 1040 },
			40: { length: 1040 }
		},
		14: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1610,
				noRetry: true
			}
		},
		15: { // Retribution
			0: {
				fixedSpeed: 1,
				length: 1575,
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			}/*,
			80: { // cannot emulate triggering animation
				length: 990,
				distance: 276.7
			}*/
		},
		16: { // Shadow Reaping
			0: {
				fixedSpeed: 1,
				length: 775
			}
		},
		18: { // Shrouded Escape
			0: {
				length: 850,
				distance: 150,
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			}
		},
		/*20: { // Cable Step
			0: { length: 1250 }	// cannot emulate this skill
		},*/
		40: { // Shadow Step
			'*': {
				length: 700,
				distance: 180,
				//forceClip: true,
				noRetry: true,
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' },
					10151000: { chain: 30 }
				}
			},
			0: true,
			30: true
		}
	},
	9: { // Gunner
		'*': { consumeAbnormal: [10152000, 10152001, 10152002, 10152010, 10152011, 10152012] },
		1: { // Blast
			'*': {
				fixedSpeed: 1,
				length: 1195,
				noInterrupt: [1],
				triggerAbnormal: { 10152011: 3100 },
				noRetry: true
			},
			1: true,
			2: true
		},
		2: { // Bombardment
			'*': { noRetry: true },
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 59900
			},
			1: {
				type: 'lockonCast',
				triggerAbnormal: { 10152082: 4100 },
				stamina: 1100,
				instantStamina: true,
				length: 3000,
				glyphs: {
					30004: { speed: 1.25 }
				}
			}
		},
		3: { // Scattershot
			'*': {
				length: 1725,
				distance: -108,
				noInterrupt: [3, 20],
				triggerAbnormal: { 10152083: 4100 },
				glyphs: {
					30007: {
						movement: [
							{
								duration: 394,
								speed: 1,
								unk: 1,
								distance: 0
							},
							{
								duration: 111,
								speed: 1,
								unk: 1,
								distance: 0
							},
							{
								duration: 1333,
								speed: 1.8,
								unk: 1,
								distance: 64.8
							}
						],
						distance: 0.6
					}
				},
				chains: {
					1: 30,
					'2-1': 30,
					4: 30,
					'7-3': 30,
					'9-11': 30,
					10: 30,
					11: 30,
					13: 30,
					15: 30,
					19: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		4: { // Point Blank
			'*': {
				length: 1525,
				distance: 137.88,
				noRetry: true,
				chains: {
					1: 30,
					'2-1': 30,
					3: 30,
					'4-1': 4,
					'4-2': 4,
					'4-30': 4,
					'7-3': 30,
					'9-10': 30,
					'9-11': 30,
					10: 30,
					11: 30,
					13: 30,
					15: 30,
					19: 30,
					40: 30
				},
			},
			1: {
				triggerAbnormal: {
					10152000: 3100,
					10152001: 3100
				},
				noInterrupt: ['4-1','4-2','4-30',20]
			},
			2: {
				triggerAbnormal: {
					10152000: 3100,
					10152001: 3100
				},
				noInterrupt: ['4-1','4-2','4-30',20]
			},
			3: {
				length: 1195,
				distance: -198.53,
				noInterrupt: ['4-3','4-4',20],
				triggerAbnormal: { 10152002: 4100 }
			},
			4: {
				length: 1195,
				distance: -198.53,
				triggerAbnormal: { 10152002: 4100 }
			},
			30: {
				triggerAbnormal: {
					10152000: 3100,
					10152001: 3100
				}
			}
		},
		5: { // Burst Fire
			0: { length: 850 },
			1: {
				noInterrupt: ['5-0'],
				noRetry: true,
				fixedSpeed: 1,
				length: 130,
				stamina: 75,
				instantStamina: true,
				glyphs: {
					30046: { stamina: -10 }
				},
				level: [
					{ stamina: 55 },
					{ stamina: 60 },
					{ stamina: 65 },
					{ stamina: 70 }
				]
			}
		},
		6: { // Time Bomb
			'*': {
				fixedSpeed: 1,
				length: 1000,
				triggerAbnormal: {
					10152010: 3100,
					10152084: 4100
				},
				noRetry: true,
			},
			1: true,
			2: true
		},
		7: { // Arcane Barrage
			'*': { length: 1525 },
			1: {
				fixedSpeed: 1,
				noInterrupt: [7],
				triggerAbnormal: {
					10152010: 3100,
					//10152040: 3100
				},
				noRetry: true
			},
			2: {
				fixedSpeed: 1,
				noInterrupt: [7],
				triggerAbnormal: {
					10152010: 3100,
					//10152040: 3100
				},
				noRetry: true
			},
			3: {
				length: 1200,
				//consumeAbnormal: 10152040,
				requiredBuff: 10152040,
				triggerAbnormal: { 10152081: 4100 },
				noRetry: true,
				noInterrupt: ['7-3']
			}
		},
		9: { // Mana Missiles
			'*': {
				type: 'chargeCast',
				length: 1250,
				noRetry: true
			},
			0: {
				type: 'charging',
				length: 1250 // 250
			},
			10: {
				distance: -50,
				triggerAbnormal: { 10152085: 4100 }
			},
			11: {
				distance: -100,
				triggerAbnormal: { 10152085: 4100 }
			}
		},
		10: { // Arc Bomb
			'*': {
				length: 1325,
				noInterrupt: [10, 20],
				noRetry: true,
				triggerAbnormal: { 10152086: 4100 },
				chains: {
					1: null,
					'2-1': null,
					3: null,
					4: null,
					6: null,
					7: null,
					9: null,
					//10: null,
					11: null,
					13: null,
					15: null,
					18: null,
					19: null,
					40: null
				}
			},
			1: true,
			2: true,
			30: true
		},
		11: { // Rocket Jump
			'*': {
				length: 1400,
				distance: 415.45,
				noInterrupt: [3, 11, 15, 20],
				triggerAbnormal: { 10152087: 4100 },
				chains: {
					1: 30,
					'2-1': 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					9: 30,
					10: 30,
					11: 30,
					13: 30,
					15: 30,
					18: 30,
					19: 30,
					40: 31
				},
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			},
			1: true,
			2: true,
			30: true,
			31: {
				length: 1700,
				distance: 503.64,
				race: {
					9: {	// Elin
						distance: 506.27
					}
				}
			}
		},
		13: { // Balder's Vengeance
			'*': {
				length: 5800,
				distance: -269.09,
				chains: {
					1: null,
					'2-1': null,
					3: null,
					4: null,
					6: null,
					7: null,
					9: null,
					10: null,
					11: null,
					//13: null,
					15: null,
					18: null,
					19: null,
					40: null
				},
				triggerAbnormal: { 10152097: 4000 },
				noRetry: true
			},
			1: true,
			2: true,
			30: true
		},
		15: { // Replenishment
			'*': {
				fixedSpeed: 1,
				length: 1325,
				noInterrupt: [15, 20],
				triggerAbnormal: { 10152072: 4100 },
				chains: {
					1: 30,
					'2-1': 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					9: 30,
					10: 30,
					11: 30,
					13: 30,
					//15: 30,
					18: 30,
					19: 30,
					40: 30
				},
				noRetry: true
			},
			1: true,
			2: true,
			30: true
		},
		18: { // HB
			'*': {
				fixedSpeed: 1,
				length: 1430,
				noRetry: true
			},
			1: true,
			2: true
		},
		19: { // ST
			'*' : {
				length: 1325,
				noRetry: true,
				chains: {
					1: null,
					'2-1': null,
					3: null,
					4: null,
					6: null,
					7: null,
					9: null,
					10: null,
					11: null,
					13: null,
					15: null,
					18: null,
					//19: null,
					40: null
				},
			},
			1: true,
			2: true,
			30: true
		},
		20: { // Retaliate
			0: {
				type: 'retaliate',
				length: 1485,
				noRetry: true
			}
		},
		40: { // Rolling Reload
			0: {
				fixedSpeed: 1,
				length: 930,
				distance: 172.5,
				triggerAbnormal: {
					10152010: 3100,
					10152012: 3100,
					10152071: 3100,
					10152080: 4100
				},
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				//forceClip: true,
				noRetry: true
			}
		}
	},
	10: { // Brawler
		1: { // Punch
			'*': {
				length: 1575,
				distance: 71.28,
				triggerAbnormal: { 10153060: 3000 },
				consumeAbnormalEnd: 10153060,
				noInterrupt: ['1-3', 22, 24, 26],
				chains: {
					'1-0': 1,
					'1-1': 2,
					'1-2': 3,
					'1-30': 1,
					'1-31': 32,
					'1-32': 2,
					'2-2': 31,
					'2-3': 31,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					40: 30
				},
				noRetry: true
			},
			0: true,
			1: {
				length: 1575,
				distance: 68.63
			},
			2: {
				length: 925,
				distance: 50.7
			},
			3: {
				length: 1725,
				distance: 121
			},
			30: true,
			31: true,
			32: {
				length: 1575,
				distance: 68.63
			}
		},
		2: { // Counter
			'*': {
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				noRetry: true
			},
			1: {
				length: 1200,
				distance: 139.97,
				triggerAbnormal: { 10153001: 0x7fffffff },
				consumeAbnormalEnd: 10153001
			},
			2: {
				length: 1800,
				distance: 84,
				triggerAbnormal: { 10153002: 0x7fffffff },
				consumeAbnormalEnd: 10153002
			},
			3: {
				length: 1925,
				distance: 131.2,
				triggerAbnormal: { 10153003: 0x7fffffff },
				consumeAbnormalEnd: 10153003
			},
			4: {
				length: 1950,
				distance: 142.86,
				triggerAbnormal: { 10153004: 0x7fffffff },
				consumeAbnormalEnd: 10153004
			},
			10: {
				type: 'holdInfinite',
				fixedSpeed: 1,
				//length: 800,
				distance: 33.38,
				triggerAbnormal: { 10153006: 0x7fffffff },
				consumeAbnormalEnd: 10153006,
				endType51: true
			},
			11: {
				type: 'holdInfinite',
				fixedSpeed: 1,
				//length: 800,
				distance: 33.38,
				triggerAbnormal: { 10153005: 0x7fffffff },
				consumeAbnormalEnd: 10153005,
				endType51: true
			},
			12: {
				/*abnormals: {
					10153061: { chain: 1 },
					10153062: { chain: 2 },
					10153063: { chain: 3 },
					10153064: { chain: 4 }
				},*/
				chains: {
					'1-0': 1,
					'1-1': 2,
					'1-2': 3,
					'1-3': 4,
					'1-30': 1,
					'1-31': 1,
					'1-32': 2
				}
			}
		},
		/*3: { // Divine Wrath
			'*': {	// impossible to emulate this skill as the client needs to get the correct position in S_ACTION_STAGE stage 1 to send correct series of C_NOTIFY_LOCATION_IN_ACTION
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			},
			0: {
				type: 'lockon',
				fixedSpeed: 1,
				length: 29900,
				noRetry: true
			},
			1: {
				type: 'lockonCast',
				fixedSpeed: 1,
				triggerAbnormal: { 
					10153051 : 0x7fffffff,
					10154054 : 6000
				},
				length: [1780, 1440, 1265],
				distance: [0, 0, 0],	//no movement in stage 0, C_NOTIFY_LOCATION_IN_ACTION in stage 1(at least 2 packets) and stage 2(1 packet)
				noRetry: true
			}
		},*/
		4: { // Ground Pound
			'*': {
				length: 3225,
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				noInterrupt: [4],
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					//4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				}
			},
			0: true,
			30: true
		},
		5: { // Bullrush
			0: {
				fixedSpeed: 1,
				length: [2950, 650],
				distance: [0, 135],
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			}
		},
		6: { // Haymaker
			'*': {
				length: [1025, 1825],
				distance: [0, 171.61],
				noRetry: true,
				abnormals: {
					31120: { chain: 31 }
				},
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true,
			31: true
		},
		7: { // Roundhouse Kick
			'*': {
				length: 860,
				distance: 105,
				noInterrupt: [7],
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					//7: 30,
					8: 30,
					9: 30,
					10: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				}
			},
			0: true,
			30: true
		},
		8: { // Piledriver
			'*': {
				length: 1950,
				distance: 164.94,
				abnormals: {
					31120: { chain: 31 }
				},
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					//8: 30,
					9: 30,
					10: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true,
			31: true
		},
		9: { // Jackhammer
			'*': {
				fixedSpeed: 1,
				length: 1540,
				distance: 40,
				noInterrupt: [9],
				abnormals: {
					31120: { chain: 31 }
				},
				chains:{
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					//9: 30,
					10: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true,
			31: true
		},
		10: { // Counterpunch
			'*': {
				length: 1855,
				distance: 155,
				requiredBuff: 10153000,
				noInterrupt: [10],
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					//10: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				}
			},
			0: true,
			30: true
		},
		/*12: { // Retaliate
			'*': {
				type: 'retaliate',
				length: 1000,
				noRetry: true
			},
			0: true
		},*/
		13: { // Provoke
			'*': {
				fixedSpeed: 1,
				length: 1291,
				noRetry: true,
				noInterrupt: [13]
			},
			1: true,
			2: true
		},
		14: { // Infuriate
			'*': {
				length: 1666,
				noRetry: true,
				noInterrupt: [14],
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					13: 30,
					//14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		15: { // High Kick
			'*': {
				length: 1305.44,
				distance: 133.27,
				requiredBuff: 10153503,
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					13: 30,
					14: 30,
					//15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				}
			},
			0: true,
			30: true
		},
		16: { // Flip Kick
			'*': {
				length: 2066,
				distance: 134,
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					13: 30,
					14: 30,
					15: 30,
					//16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		/*17: { // Rampage
			// should be similar to one thousand cut?
			0: {
				type: 'dash',
				fixedSpeed: 1,
				requiredBuff: 10153050,
				length: 600,
				distance: 500
			},
			10: {
				fixedSpeed: 1,
				length: 3570,
				distance: 293.56	// need a duel dummy to iframe this skill to avoid collision, not accurate
			}
		},*/
		18: { // Growing Fury
			'*': {
				length: 1371.66,
				noRetry: true,
				noInterrupt: [18],
				requiredBuff: 10153050,
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					//18: 30,
					19: 30,
					20: 30,
					21: 30,
					22: 30,
					24: 30,
					26: 30,
					40: 30
				},
			},
			1: true,
			2: true,
			30: true
		},
		19: { // Invigorating Rage
			'*': {
				fixedSpeed: 1,
				length: 1433,
				noRetry: true,
				noInterrupt: [19],
				stamina: 1500,
				instantStamina: true,
			},
			1: true,
			2: true
		},
		/*20: { // Meat Grinder
			0: {
				fixedSpeed: 1,
				length: 3270,
				abnormals: { 10153040: { chain: 'invalid' } }
				onlyTarget: true
			}
		},*/
		21: { // Mounting Rage
			'*': {
				fixedSpeed: 1,
				length: 1275,
				noRetry: true,
				noInterrupt: [21],
				abnormals: { 10153040: { chain: 'invalid' } }
			},
			1: true,
			2: true
		},
		22: { // Flying Kick 迴旋飛踢
			0: {
				length: 1815,
				distance: 245.21,
				noInterrupt: [22],
				noRetry: true,
				abnormals: {
					10153190 : { chain: 30 },
					10153191 : { chain: 30 },
					10153192 : { chain: 30 },
					10153193 : { chain: 30 },
					10153194 : { chain: 30 },
					10153195 : { chain: 30 }
				},
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					24: 30,
					26: 30,
					40: 30
				}
			},
			30: {
				length: 1222,
				distance: 351.98
			}
		},
		24: { // One-Inch Punch(EU,NA), 原值暴擊(TW)
			'*': {
				distance: 23.7,
				abnormals: {
					31120: { chain: 31 },
					10153540: { speed: 1.2 }
				},
				noRetry: true,
				noInterrupt: [24],
				abnormals: {
					31120: { chain: 31 },
					10153190 : { chain: 30 },
					10153191 : { chain: 30 },
					10153192 : { chain: 30 },
					10153193 : { chain: 30 },
					10153194 : { chain: 30 },
					10153195 : { chain: 30 }
				},
				chains: {
					1: 30,
					2: 30,
					'3-1': 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					17: 30,
					18: 30,
					19: 30,
					20: 30,
					21: 30,
					22: 30,
					26: 30,
					40: 30
				}
			},
			1: { length: 2000 },
			2: { length: 2000 },
			30: { length: 950 },
			31: { length: 950 }
		},
		26: { // Brawling roll(EU), Rhythmic Blow(NA), 颶風連打(TW)
			'*': {
				noRetry: true,
				abnormals: {
                    10153190: { chain: 2 },
                    10153191: { chain: 3 },
                    10153192: { chain: 4 },
                    10153193: { chain: 5 },
                    10153194: { chain: 6 },
                    10153195: { chain: 7 }
                }
			},
			0: {
				length: [178.57, 412.85],
				distance: [0, 30],
				chains: {
					1: 2,
					2: 2,
					'3-1': 2,
					4: 2,
					5: 2,
					6: 2,
					7: 2,
					8: 2,
					9: 2,
					10: 2,
					13: 2,
					14: 2,
					15: 2,
					16: 2,
					17: 2,
					18: 2,
					19: 2,
					20: 2,
					21: 2,
					22: 2,
					24: 2,
					'26-0': 2,
					'26-2': 3,
					'26-3': 4,
					'26-4': 5,
					'26-5': 6,
					40: 2
				}
			},
			1: {
				length: [178.57, 412.85],
				distance: [0, 30],
			},
			2: {
				length: 782,
				distance: 6
			},
			3: {
				length: 782,
				distance: 6
			},
			4: {
				length: 716,
				distance: 6
			},
			5: {
				length: 916,
				distance: 6
			},
			6: {
				length: 2780,
				distance: 24
			},
			7: {
				length: 2780,
				distance: 24
			},
		},
		40: { // Quick Dash
			'*': {
				fixedSpeed: 1,
				length: 580,
				distance: 144,
				//forceClip: true,
				noRetry: true,
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' },
					10153150: { chain: 30 },
				},
			},
			0: true,
			1: true,
			30: true,
			31: true
		},
		910: { // Awakening Eyes Aura(EU), Apex Urgency(NA), 覺醒氣息(TW)
			0: { length: 500 }
		}
	},
	11: { // Ninja
		'*': { consumeAbnormal: [10154000, 10154001, 10154002, 10154003, 10154004, 10154005, 10154006, 10154081, 10154082, 10154085] },
		1: { // Combo Attack
			'*': {
				fixedSpeed: 1,
				length: 650,
				distance: 44.86,
				noInterrupt: [17],
				triggerAbnormal: { 10154000: 1650 },
				noRetry: true
			},
			0: {
				abnormals: {
					10154000: { chain: 1 },
					10154001: { chain: 2 },
					10154002: { chain: 3 },
					10154003: { chain: 4 },
					10154004: { chain: 5 },
					10154005: { chain: 6 }
				},
				chains: {
					1: 30,
					4: 30,
					6: 30,
					7: 30,
					9: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					18: 30,
					19: 30,
					20: 30
				}
			},
			1: {
				length: 1125,
				distance: 52.47,
				consumeAbnormal: 10154000,
				triggerAbnormal: { 10154001: 1500 }
			},
			2: {
				length: 1200,
				distance: 69.96,
				consumeAbnormal: 10154001,
				triggerAbnormal: { 10154002: 1400 }
			},
			3: {
				length: 1225,
				distance: 38.01,
				consumeAbnormal: 10154002,
				triggerAbnormal: { 10154003: 1400 }
			},
			4: {
				length: 1700,
				distance: 54.69,
				consumeAbnormal: 10154003,
				triggerAbnormal: { 10154004: 1400 }
			},
			5: {
				length: 1500,
				distance: 37.80,
				consumeAbnormal: 10154004,
				triggerAbnormal: { 10154005: 1600 }
			},
			6: {
				length: 1150,
				distance: 82.62,
				consumeAbnormal: 10154005,
				triggerAbnormal: { 10154006: 100 }
			},
			30: {
				abnormals: {
					10154000: { chain: 1 },
					10154001: { chain: 2 },
					10154002: { chain: 3 },
					10154003: { chain: 4 },
					10154004: { chain: 5 },
					10154005: { chain: 6 }
				}
			},
			40: {
				abnormals: {
					10154000: { chain: 41 },
					10154001: { chain: 42 },
					10154002: { chain: 43 },
					10154003: { chain: 44 },
					10154004: { chain: 45 },
					10154005: { chain: 46 }
				},
				chains: {
					1: 70,
					4: 70,
					6: 70,
					7: 70,
					9: 70,
					12: 70,
					13: 70,
					14: 70,
					15: 70,
					16: 70,
					18: 70,
					19: 70,
					20: 70
				}
			},
			41: {
				length: 1125,
				distance: 52.47,
				consumeAbnormal: 10154000,
				triggerAbnormal: { 10154001: 1500 }
			},
			42: {
				length: 1200,
				distance: 69.96,
				consumeAbnormal: 10154001,
				triggerAbnormal: { 10154002: 1400 }
			},
			43: {
				length: 1225,
				distance: 38.01,
				consumeAbnormal: 10154002,
				triggerAbnormal: { 10154003: 1400 }
			},
			44: {
				length: 1700,
				distance: 54.69,
				consumeAbnormal: 10154003,
				triggerAbnormal: { 10154004: 1400 }
			},
			45: {
				length: 1500,
				distance: 37.80,
				consumeAbnormal: 10154004,
				triggerAbnormal: { 10154005: 1600 }
			},
			46: {
				length: 1150,
				distance: 82.62,
				consumeAbnormal: 10154005,
				triggerAbnormal: { 10154006: 100 }
			},
			70: {
				abnormals: {
					10154000: { chain: 41 },
					10154001: { chain: 42 },
					10154002: { chain: 43 },
					10154003: { chain: 44 },
					10154004: { chain: 45 },
					10154005: { chain: 46 }
				}
			}
		},
		2: { // Shadow Jump
			'*': {
				fixedSpeed: 1,
				length: 650,
				distance: 175,
				//forceClip: true,
				noRetry: true,
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' },
					10154010: { chain: 30 }
				}
			},
			0: true,
			30: true
		},
		3: { // Leaves on the Wind
			'*': {
				length: 1275,
				noInterrupt: [3],
			},
			0: {
				chains: {
					1: null,
					'4-10': null,
					5: null,
					6: null,
					7: null,
					9: null,
					10: null,
					12: null,
					13: null,
					14: null,
					15: null,
					16: null,
					18: null,
					19: null,
					20: null
				}
			},
			30: true
		},
		4: { // Jagged Path
			1: {
				type: 'dash',
				fixedSpeed: 1,
				length: 665,
				distance: 469,
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}	
			},
			10: { length: 1500 },
			11: {
				length: 300,
				distance: 150
			}
		},
		5: { // Impact Bomb
			'*': {
				length: 1008,
				distance: -291.6,
				noInterrupt: [2, 5],
				//forceClip: true,
				noRetry: true,
				chains: {
					1: null,
					2: null,
					3: null,
					'4-10': null,
					6: null,
					7: null,
					8: null,
					9: null,
					10: null,
					11: null,
					12: null,
					13: null,
					14: null,
					15: null,
					16: null,
					17: null,
					19: null,
					20: null
				},
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			},
			0: true,
			30: true
		},
		6: { // One Thousand Cuts
			'*': { 
				length: 440,
				chains: { // Needed to state we want to trigger substage 4, else it will trigger 6
					1: 30,
					5: 30,
					4: 30,
					7: 30,
					//8: 30, sometimes uses it, sometimes it doesn't
					9: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					18: 30,
					19: 30,
					20: 30
				},
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			 },
			0: true,
			1: { // 0/30(iframe) -> 1(dash, also iframes) -> 10(deeps, doesn't iframe in the very beginning) 
				type: 'dash',
				fixedSpeed: 1,
				length: 300,
				distance: 246
			},
			10: { length: 3500 },
			30: true 
		},
		7: { // Decoy Jutsu
			0: {
				length: 1550,
				onlyTarget: true,
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			}
		},
		8: { // Fire Avalanche
			'*': {
				triggerAbnormal: { 10154080: 10000 },
				length: [700, 1375, 325],
				distance: [0, 367.31, 0],
				abnormals: {
					10154080: { chain: 1 },
					10154081: { chain: 2 }
				},
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					9: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					18: 30,
					19: 30,
					20: 30
				},
				noRetry: true
			},
			0: true,
			1: {
				triggerAbnormal: { 10154081: 5000 },
				length: [1375, 325],
				distance: [411.39, 0]
			},
			2: {
				triggerAbnormal: { 10154082: 1 },
				length: [1375, 325],
				distance: [455.47, 0]
			},
			30: true
		},
		9: { // Smoke Bomb
			'*': { 
				length: 725,
				noInterrupt: [2, 9],
				chains: {
					1: null,
					2: null,
					3: null,
					'4-10': null,
					5: null,
					6: null,
					7: null,
					8: null,
					10: null,
					11: null,
					12: null,
					13: null,
					14: null,
					15: null,
					16: null,
					17: null,
					19: null,
					20: null
				},
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' }
				}
			},
			0: true,
			30: true
		},
		11: { // Focus
			'*': {
				length: 1430,
				noInterrupt: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20]
			},
			0: true,
			50: true
		},
		12: { // Skyfall
			'*': {
				length: 1325,
				distance: 154.72,
				chains: {
					1: 30,
					2: 30, // Rarely triggers, does not affect its normal usage
					4: 30,
					5: 30, 
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					18: 30,
					20: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		13: { // Circle of Steel
			'*': {
				length: 3225,
				distance: 245.06,
			    chains: {
					1: 30,
					2: 30, 
					4: 30,
					5: 30, 
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					12: 30,
					14: 30,
					15: 30,
					16: 30,
					18: 30,
					19: 30,
					20: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		14: { // Double Cut
			'*': {
				length: 1425,
				distance: 162,
				chains: {
					1: 30,
					2: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					15: 30,
					16: 30,
					18: 30,
					19: 30,
					20: 30
				}
			},
			1: true,
			2: true,
			30: true
		},
		15: { // Burning Heart
			'*': {
				length: 390,
				stamina: 100,
				instantStamina: true,
				abnormals: {
					32033: { speed: 1.2 },
					32058: { speed: 1.3 }
				}
			},
			0: {
				triggerAbnormal: {
					10154060: 1300,
					10154100: 2000,
					10154101: 2000
				},
				length: 880
			},
			1: {
				triggerAbnormal: { 10154061: 850 },
				consumeAbnormal: 10154060
			},
			2: {
				triggerAbnormal: { 10154062: 850 },
				consumeAbnormal: 10154061
			},
			3: {
				triggerAbnormal: { 10154063: 850 },
				consumeAbnormal: 10154062
			},
			4: {
				triggerAbnormal: { 10154064: 850 },
				consumeAbnormal: 10154063
			},
			5: {
				triggerAbnormal: { 10154065: 850 },
				consumeAbnormal: 10154064
			},
			6: {
				triggerAbnormal: { 10154066: 850 },
				consumeAbnormal: 10154065
			},
			7: {
				triggerAbnormal: { 10154067: 850 },
				consumeAbnormal: 10154066
			},
			8: {
				triggerAbnormal: { 10154068: 850 },
				consumeAbnormal: 10154067
			},
			9: {
				triggerAbnormal: { 10154069: 850 },
				consumeAbnormal: 10154068
			}
		},
		16: { // Death Blossom
			'*': {
				fixedSpeed: 1,
				length: 1525,
				noInterrupt: [16],
				chains: {
					1: null,
					'4-10': null,
					5: null,
					6: null,
					7: null,
					9: null,
					10: null,
					12: null,
					13: null,
					14: null,
					15: null,
					18: null,
					19: null,
					20: null
				}
			},
			0: true,
			30: true
		},
		17: { // Attunement
			'*': { 
				length: 1000,
				chains: {
					1: 30,
					2: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					18: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		18: { // Bladestorm
			'*': { 
				length: 1000,
				distance: 68.535,
				noInterrupt: [18],
				chains: {
					1: null,
					3: null,
					'4-10': null,
					6: null,
					7: null,
					9: null,
					10: null,
					12: null,
					13: null,
					14: null,
					15: null,
					16: null,
					19: null,
					20: null
				}
			 },
			0: true,
			30: true
		},
		19: { // Chakra Thrust
			'*': {
				length: [225, 825],
				distance: 127.5,
				noInterrupt: [19],
				chains: {
					1: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					12: 30,
					14: 30,
					13: 30,
					15: 30,
					16: 30,
					18: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		20: { // Clone Jutsu
			0: {
				fixedSpeed: 1,
				length: 1275
			}
		}
	},
	12: { // Valkyrie
		1: { // Slash
			'*': {
				length: 1100,
				distance: 47.13,
				noInterrupt: ['1-3'],
				chains: {
					'1-0': 1,
					'1-1': 2,
					'1-2': 3,
					'1-30': 1,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				},
				noRetry: true
			},
			0: true,
			1: {
				length: 1200,
				distance: 43.37
			},
			2: {
				length: 1450,
				distance: 58.54
			},
			3: {
				length: 1925,
				distance: 90.1
			},
			30: true
		},
		2: { // Overhead Slash
			'*': {
				length: 1900,
				distance: 102.47,
				chains: {
					1: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		3: { // Glaive Strike
			'*': {
				length: 2450,
				distance: 105.62,
				requiredBuff: 10155112,
				chains: {
					1: 30,
					2: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		4: { // Charge
			0: {
				type: 'dash',
				fixedSpeed: 1,
				length: 550,
				distance: 436,
				noInterrupt: ['4-0','4-10'], //prevent double charges if first one did'nt hit a target.
				noRetry: true
			},
			10: { length: 900 },
			11: {
				length: 400,
				distance: 50,
				noInterrupt: [1, 2, '4-11', 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21]
			}
		},
		5: { // Maelstrom
			'*': {
				length: 3150,
				distance: 125.11,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		6: { // Leaping Strike
			'*': {
				length: 1775,
				distance: 105,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					'4-10': 30,
					'4-11': 30,
					5: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		7: { // Spinning Death
			'*': {
				length: 1775,
				distance: 139.72,
				noInterrupt: ['7-2'],
				abnormals: {
					10155070: { chain: 1 },
					10155071: { chain: 2 }
				},
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				},
				noRetry: true
			},
			0: true,
			1: true,
			2: {
				length: 2300,
				distance: 197.82
			},
			30: true
		},
		8: { // Titansbane
			'*': {
				fixedSpeed: 1,
				length: 7700,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 1,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			1: { length: 2000 },
			30: true
		},
		9: { // Ground Bash
			'*': {
				length: 1450,
				distance: 136,
				requiredBuff: 10155112,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		10: { // Dream Slash
			'*': {
				length: 1775,
				distance: 11.78,
				noInterrupt: [10],
				glyphs: {
					33020: { speed: 1.2 }
				},
				chains: {
					1: null,
					2: null,
					3: null,
					4: null,
					5: null,
					6: null,
					7: null,
					8: null,
					9: null,
					11: null,
					12: null,
					13: null,
					14: null,
					15: null,
					16: null,
					//17: 30, // Not correct since still triggers substage 4 on them.
					18: null,
					19: null,
					//20: null,
					//21: 30 //  But for now it works /shrug
				}
			},
			0: true,
			30: true
		},
		11: { // Shining Crescent
			'*': {
				length: 2725,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					'4-10': 30,
					'4-11': 30,					
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: {
				distance: 227.49,
				noInterrupt: [11]
			},
			1: {
				length: 2500,
				chains: {
					1: 31,
					2: 31,
					3: 31,
					4: 31,
					5: 31,
					6: 31,
					7: 31,
					8: 31,
					9: 31,
					10: 31,
					11: 31,
					12: 31,
					13: 31,
					14: 31,
					15: 31,
					16: 31,
					19: 31,
					20: 31
				}
			},
			30: { distance: 227.49 },
			31: { length: 2500 }
		},
		12: { // Ragnarok
			'*': {
				length: 2800,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		13: { // Bloodflower
			'*': {
				length: 1700,
				distance: 20.57,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		14: { // Evasion
			'*': {
				fixedSpeed: 1,
				length: 825,
				distance: 188.18,
				//forceClip: true,
				noInterrupt: [14],
				abnormals: {
					400800: { chain: 'invalid' },
					400801: { chain: 'invalid' },
					501320: { chain: 'invalid' },
					501321: { chain: 'invalid' },
					501322: { chain: 'invalid' },
					501323: { chain: 'invalid' },
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				}
			},
			0: true,
			1: {
				consumeAbnormal: 10155020, 
				requiredBuff: 10155020
			}
		},
		15: { // Windslash
			'*': {
				length: 1100,
				distance: 152.82,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		16: { // Runeburst
			'*': {
				fixedSpeed: 1,
				length: 1325,
				distance: 25,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		17: { // Balder's Tears
			0: {
				fixedSpeed: 1,
				length: 1075
			}
		},
		18: { // Retaliate
			0: { 
				type: 'retaliate',
				length: 1630,
				noRetry: true 
			}
		},
		19: { // Reclamation
			'*': {
				length: 1525,
				chains: {
					1: 30,
					2: 30,
					3: 30,
					4: 30,
					5: 30,
					6: 30,
					7: 30,
					8: 30,
					9: 30,
					10: 30,
					11: 30,
					12: 30,
					13: 30,
					14: 30,
					15: 30,
					16: 30,
					19: 30,
					20: 30
				}
			},
			0: true,
			30: true
		},
		20: { // Backstab
			0: {
				length: 1500,
				abnormals: {
					7692002: { chain: 'invalid' },
					9692002: { chain: 'invalid' }
				},
				onlyTarget: true
			}
		},
		21: { // Dark Herald
			0: {
				fixedSpeed: 1,
				length: 925,
				requiredBuff: 10155201
			}
		}
	}
}