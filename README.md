# Yunfei's fork of skill prediction

NA finally gets awakening patch. Yunfei can now directly test new skills and changed skills to deliver much more accurate skill emulation.

## Disclaimer

I strongly discourage to use skill prediction for pvp purpose. SP has so many bugs in pvp that I am tired and struggling to diagnose and fix them. For example, you can't get out of bullrush or retaliate knockups. Pvp community is also hostile to skill prediction, you are likely to get reported by having weird behaviors. I do not take responsibility for people exploiting from SP bugs and any consequences like sanctions put on accounts by TERA publishers. If you insist in pvping with high ping, use the scripts made by someone else who is confident in this.

## Issues that still persist:

**Slayer's chain after Savaging strike(blazing thrust) is buggy af from server side. e.g. OHS/MS/evis/UOHS/PB after SS 1st->SS 2nd will be broken if you don't chain them fast enough to supercancel SS 2nd**

~~Double casts when your ping is higher than animation length, or the cooldown applies at the very end of the skill animation(Short skills like Teleporting jaunts, Boomerang pulse, Overpower, Restraning arrow, Web arrow)~~, Use https://github.com/YunfeiG/no-double-casts alongside my SP.

Triple point blank casts(Point blank forward, blast cancel, forward->backward)

Buggy chained Vampiric Blow(Hardcoded skill at server side, you can chain this skill even if it's on cooldown)

Headlong rush buff not be applied when you pointblank this skill to an enemy.

Fake skills when mounting(Doesn't hurt much)

Ninja auto attack glitch(Server sided bug, can't eliminate this, better comment this skill out)

Sorcerer jaunt->charging arcane pulse rubberband(side effect of preventing teleport janut clip through walls)

Brawler's location in other's pov(often seen to be at back of the enemy) when actively attacking.
Perhaps this is not SP related. I often saw slayers were attacking at back of enemies in duels before SP was introduced.

Repeatitive animation of Brawler's provoke, mounting rage when there is ping jitter.(Looks like client sided bug)

Fake lock-on skill casts on invincible or invisible targets (Energy star on barriers before last boss in TRNM for example)

High chance of ghost when attack speed suddenly decreased due to expiration of attack speed buff on previous skill,(Astance Warrior is the most suffering class because skill like charging slash will ghost when roll/DFA buff expired on previous skill and SP can't receive new attack speed value in time due to high ping). Attack speed emulation is in demand.

## Update/fix logs

May 13, 2018: Reaper Soul reversal added. Shadow Lash 2nd, 3rd and last cast fix.

May 7, 2018: Fix S_INVEN issue for low level players(whose bodywear doesn't have any stats).

May 1, 2018: Minor Fixes, Zerk Leaping strike->Lethal strike swfitlinked glyph disabled (broken from server side)

Apr 26, 2018: Fixed moving blast/time bomb->rocket jump/scatter shot ghosting

Apr 20, 2018: Warrior Blade Waltz, Slayer Savaging strike refinement.

Apr 18, 2018: Brawler, Mystic should be completed.

Apr 17, 2018: Warrior, Lancer, Slayer, Berzerker, Priest fix should be completed. Mystic and Brawler untested by myself yet.

Apr 15, 2018: Priest Holy burst, Slayer awakening skills fix. Warrior's Leaping Strike->Traverse cut/~~Rain of blows~~ chains added, Blade waltz chains added.

Apr 14, 2018: Priest and Mystic attempt, NEED MANY TESTS!

Apr 14, 2018: Warrior and Slayer attempt, NEED MANY TESTS!

Apr 14, 2018: Lancer and Berserker awakening skills, Brawler rhk(grounding glyph)->1-inch punch fix, NEED MANY TESTS!

Apr 12, 2018: So-called vec3 adaption, Brawler awakening skills, NEED MANY TESTS!

Feb 20, 2018: Hailstorm noctenium effect.

Feb 16 2018: Celebrate the new year of the dog. Petrification fix(KDNM 2nd boss cone attack).

Feb 4, 2018: Rain of Arrows, Regeneration Circle, Resurrection: Attack speed bonus from Rare and Superior and other kinds of noctenium support.

Growing Fury: fixed the problem when you can cast this skill without having full rage.

Jan 24, 2018: Brawler: Growing fury, Invigorating rage, High kick added, piledriver fixed and minor refinements to other skills. Meat grinder, Rampage are still under testing. Hide ping spam in the console window, if you want to reactivate this, go edit ping.js and set DISPLAY_PING to true.

Jan 12, 2018: Ping.js fix. Stops spamming C_REQUEST_GAMESTAT_PING to server after number of teleports. SORRY I WAS TOO LATE TO REALIZE THIS ISSUE.

Jan 8, 2018: Minor Deadly Gamble II fix.

Dec 25, 2017, Merry Christmas, my SP now enables auto update with Caali's proxy. Fix "Unable to detonate Arcane Barrage bug", Burning heart and Fire avalanche full emulation.

Dec 19, 2017, Fixed Traverse cut animation when Traverse cut is not level X or Defensive stance is not level II.

Dec 11, 2017, Chained Vampiric Blow emulation for both in-combat and out-combat. **Strongly recommend to turn show default chain off**. The emulation is hardcoded because the skill made by BHS is hardcoded.

Issue 1: Just full charge TS/Cylone/LS (without losing HP) -> VB will ghost. Make sure you enter the overcharge stage before chaining into VB.

Issue 2: You can still chain VB even if it is on cooldown, of course that is a ghost cast.

Dec 10, 2017, Massive gunner refinements. Mainly chains of arc bomb, ST, and balder's vengeance. Bombardment and retaliate emulations are added. Slightly slow down the rate of burst fire to reduce ghosts. **Too fast PBx2 still causes skill go on cooldown twice so beware** (if you do 2nd cast within ping delay, legit but server response will be very weird).

Dec 9, 2017, Gunner point blank: revert to fast speed, but if you do PBx2 too fast, the skill goes on cooldown twice. Fix arc bomb being no animation when used after timebomb and arcane barrage fire.

Dec 6, 2017, KD/Stagger animation fix, ~~Maybe Sorcerer: Teleport->Arcane pulse rubberband fix~~ and Gunner: Roll->Rocket jump fix.

Dec 4, 2017, Removed some unused silence/fear abnormalities in the check. Mystic can now resist Kalivan's big lightning and Lilith's chain hook by Corruption Ring now.

Dec 1, 2017, NA Elin gunner patch, using new def.

Nov 27, 2017, Brawler: You can no longer cast Mounting rage client side when Growing fury is active.

Nov 23, 2017, Gunner Burst fire -5 willpower cost armor roll support. Priest Mana charge +15% charge speed armor roll support.

Nov 22, 2017: ~~Point blank, blocks button spam and invalid skill casts, and becomes slow, it was not supposed to be that fast.~~

Nov 21, 2017: Archer's low level charge skills support.

Nov 19, 2017: Berzerker's low level charge skills support.

Nov 4, 2017: Ninja's attunement no longer triggers auto attack glitch.

Oct 28, 2017: Thunderbolt, Poison arrow recoil distance added.

Oct 26, 2017: Fix Evasive roll for popori slayer, warrior. Reaper Auto attack and cable step glyph.