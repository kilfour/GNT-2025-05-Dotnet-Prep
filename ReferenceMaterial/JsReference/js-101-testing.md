[⬅️ Functioneel Programmeren](./js-101-fp.md)

## Unit Testing in JavaScript

Unit testing betekent dat je kleine stukjes code (zoals functies) automatisch test. Zo weet je snel of je code werkt — en blijft werken.

### Waarom testen?

* Je weet meteen of je iets hebt stukgemaakt.
* Je kunt makkelijker met vertrouwen refactoren.
* Je denkt na over het verwachte gedrag van je code.

### Een eenvoudige test (met Vitest)

```js
import { describe, it, expect } from 'vitest';
import { som } from './som.js';

describe('som', () => {
  it('telt twee getallen op', () => {
    expect(som(2, 3)).toBe(5);
  });
});
```

### Testbestand

Gebruik `.test.js` als bestandsnaam.

* `describe()` groepeert tests.
* `it()` beschrijft één test.
* `expect(...).toBe(...)` vergelijkt het resultaat.

### Falen is goed!

Een test die faalt vertelt je wat nog niet werkt:

```js
it('geeft "Hello Jan"', () => {
  expect(nameThisFunction("Jan")).toBe("Hello Jan");
});
```

Als de functie nog niet bestaat of het verkeerde teruggeeft, faalt de test. Perfect! Dan weet je waar je aan moet werken.

### Tip: Test-first denken

Schrijf eerst de test, dan de code. Zo dwing je jezelf om na te denken over wat je *verwacht*.

---

### Veelgebruikte matchers

```js
expect(a).toBe(b);            // strikt gelijk ===
expect(a).toEqual(b);         // diepe gelijkheid (arrays, objecten)
expect(fn).toThrow();         // verwacht een fout
expect(arr).toContain(x);     // bevat element
```

### Wat testen?

* Resultaten van functies
* Randgevallen (null, undefined, lege arrays)
* Bijzondere situaties (fouten, onverwacht gedrag)

