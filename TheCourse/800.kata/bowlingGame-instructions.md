# Bowling Game Kata 🎳

**Doel:** Implementeer een scorecalculator voor een potje bowling met test-first ontwikkeling.

## Wat moet het systeem doen?

- Je kunt `roll(pins)` aanroepen om te registreren hoeveel pins er omvallen
- Je roept `score()` aan om de totale score te krijgen

## Regels

- Elk spel bestaat uit 10 frames
- Elke frame heeft 2 worpen, tenzij je een strike gooit (10 pins omver in 1 worp)
- Bij een spare (10 pins in 2 worpen): bonus = volgende worp
- Bij een strike: bonus = volgende 2 worpen
- In frame 10 mag je extra worpen krijgen bij spare of strike

## Kata-opzet

- Schrijf tests vóór je code
- Doe kleine stappen
- Refactor vaak
- Laat tests altijd groen eindigen

## Starttest

*All rolls zijn 0 → score moet 0 zijn.*
