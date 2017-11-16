# Yunfei's fork of skill prediction

This version of SP will handle racial differences instead of elin only.

Pardon me the implementation is pretty hardcoded.

Update Nov 16, 2017: Skill level support for Burst fire, Hardened wax effect, Elin gunner, F.Casta slayer, F.Aman, Dynamic server_timeout ( 3000 for berserker and 100 for other classes ). S_EACH_SKILL_RESULT reverts to version 1 for NA support( I don't play EU TERA )


Soon™: Charge skills level support, Burst fire and Mana charge armor roll support, Double casts prevention(Short skills like Teleporting jaunts, Overpower, Restraning arrow, Web arrow)


## Races/Classes that are specialized so far

Any races/classes that are not mentioned here will use elin's configuration as default, if the class is non-race locked. F.cast's if gunner.

- M.Human: Lancer, Slayer, Archer

- F.Human: None

- M.Elf: Warrior, Lancer, Slayer

- F.Elf: Mystic

- M.Aman: Lancer, Slayer, Sorcerer

- F.Aman: Lancer, Warrior (level25), Slayer, Sorcerer

- M.Cast: Slayer, Berserker (Not level65 yet)

- F.Cast: Slayer (level10)

- Popori: Warrior, Lancer, Slayer, Berserker, Archer, Mystic

- Elin: Gunner (Not level65 yet)

- Baraka: Slayer, Berserker


## What if I don't need specialization?

Go edit ./skill.js, set RACE_SPECIALIZE value to false.
