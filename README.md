# Yunfei's fork of skill prediction

This version of SP will handle racial differences instead of elin only.


## Update/fix logs

Dec 10, 2017, Massive gunner refinements. Mainly chains of arc bomb, ST, and balder's vengeance. Bombardment and retaliate emulation are added. **Too fast PBx2 still causes skill go on cooldown twice so beware** (if you do 2nd cast within ping delay, legit but server response will be very weird)

Dec 9, 2017, Gunner point blank: revert to fast speed, but if you do PBx2 too fast, the skill goes on cooldown twice. Fix arc bomb being no animation when used after timebomb and arcane barrage fire.

Dec 6, 2017, KD/Stagger animation fix, ~~Maybe Sorcerer: Teleport->Arcane pulse rubberband fix~~ and Gunner: Roll->Rocket jump fix.

Dec 4, 2017, Removed some unused silence/fear abnormalities in the check. Mystic can now resist Kalivan's big lightning and Lilith's chain hook by Corruption Ring now.

Dec 1, 2017, NA Elin gunner patch, using new def.

Nov 27, 2017, Brawler: You can no longer cast Mounting rage client side when Growing fury is active

Nov 23, 2017, Gunner Burst fire -5 willpower cost armor roll support. Priest Mana charge +15% charge speed armor roll support

Nov 22, 2017: ~~Point blank, blocks button spam and invalid skill casts, and becomes slow, it was not supposed to be that fast.~~


Soon™: Double casts prevention(Short skills like Teleporting jaunts, Overpower, Restraning arrow, Web arrow)

Reading exact length and distance data from tera data center (Boring af)


## Races/Classes that are specialized so far

Any races/classes that are not mentioned here will use elin's configuration as default, if the class is non-race locked. F.cast's if gunner.

- M.Human: Lancer, Slayer, Archer

- F.Human: Archer

- M.Elf: Warrior, Lancer, Slayer

- F.Elf: Mystic

- M.Aman: Lancer, Slayer, Sorcerer

- F.Aman: Lancer, Warrior, Slayer, Sorcerer

- M.Cast: Slayer, Berserker

- F.Cast: Slayer

- Popori: Warrior, Lancer, Slayer, Berserker, Archer, Mystic

- Elin: Gunner

- Baraka: Slayer, Berserker
