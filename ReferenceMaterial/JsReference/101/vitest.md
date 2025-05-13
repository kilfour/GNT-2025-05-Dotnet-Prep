## ⚙️ Wat is Vitest?

[Vitest](https://vitest.dev/) is een **testtool voor JavaScript**. Het helpt je automatisch controleren of je code werkt zoals verwacht. Zo kan je experimenteren en fouten sneller opsporen.

### 🧪 Een eenvoudige test:

```js
import { describe, it, expect } from 'vitest';
import { mijnFunctie } from './mijn-bestand.js';

describe('mijnFunctie', () => {
  it('geeft true terug', () => {
    expect(mijnFunctie()).toBe(true);
  });
});
```

### 🔍 Onderdelen van zo'n test:

* `describe(...)`: groepeert tests die bij elkaar horen
* `it(...)`: beschrijft één specifiek gedrag dat je wil testen
* `expect(...)`: controleert of iets klopt — bijv. dat een waarde gelijk is aan wat je verwacht
* `toBe(...)`: vergelijkt simpele waarden zoals getallen of booleans
* `toEqual(...)`: vergelijkt objecten of arrays, handig voor complexere resultaten

```js
expect([1, 2, 3]).toEqual([1, 2, 3]); // slaagt
expect([1, 2, 3]).toEqual([1, 2]);   // faalt
expect({ naam: "Jan" }).toEqual({ naam: "Jan" });
```

### 🧯 Wat zie je bij een mislukte test?

Als een test faalt, krijg je iets zoals dit te zien:

```txt
Expected: [1, 2]
Received: [1, 2, 3]

 ❌ Assertion failed
```

Dat betekent: je test dacht dat het resultaat `[1, 2]` zou zijn, maar de functie gaf `[1, 2, 3]` terug.

Kijk altijd goed naar:

* Wat je **verwachtte** (`Expected:`)
* Wat je **kreeg** (`Received:`)
* Waar in je testbestand de fout gebeurde

### 🚥 Werkwijze:

1. **Schrijf eerst een test** voor wat je wil bereiken
2. **Laat de test falen** (rode vlag: de functie is er nog niet of werkt nog niet goed)
3. **Implementeer de functie**
4. **Test opnieuw** is de test groen? Dan werkt het!
5. **Kijk je code na** kan de functie eenvoudiger ? duidelijker ? 
Tests schrijven is net als vragen stellen aan je eigen code: "doe jij wat ik denk dat je doet?"
