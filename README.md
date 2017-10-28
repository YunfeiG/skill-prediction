# Yunfei's fork of skill prediction

This version of SP will handle racial differences instead of elin only.

Pardon me the implementation is pretty hardcoded.


## Races/Classes that are specialized so far

Any races/classes that are not mentioned here will use elin's configuration as default, if the class is non-race locked. F.cast's if gunner.

- M.Human: Lancer, Slayer, Archer

- F.Human: None

- M.Elf: Warrior, Lancer, Slayer

- F.Elf: Mystic

- M.Aman: Lancer, Slayer

- F.Aman: Lancer, Slayer, Sorcerer

- M.Cast: Slayer

- F.Cast: None

- Popori: Warrior, Lancer, Slayer, Berserker, Archer, Mystic

- Elin: Default race, no need to work on this

- Baraka: Berserker


## What if I don't need specialzation?

Go edit ./skill.js, set RACE_SPECIALIZE value to false.
