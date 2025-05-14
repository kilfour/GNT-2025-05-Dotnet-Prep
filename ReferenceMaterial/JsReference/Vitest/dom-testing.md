## 🧪 DOM testen met Vitest

Als je DOM-manipulatie wil testen in JavaScript, heb je een virtuele browser nodig. Gelukkig komt **Vitest** met ingebouwde ondersteuning voor **jsdom** — een browser-achtige omgeving in Node.js.

### ⚙️ Voorbereiding

Zorg dat je `vitest.config.js` de juiste omgeving gebruikt:

```js
export default {
  test: {
    environment: 'jsdom',
    globals: true
  }
};
```

Of start Vitest met:

```bash
npx vitest --environment jsdom
```

### 🧪 Voorbeeldtest

```js
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { veranderTitel } from './dom.js';

describe('DOM manipulatie', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <h1 id="titel">Oude titel</h1>
    `;
  });

  it('verandert de titel', () => {
    veranderTitel("Nieuwe titel");
    expect(document.querySelector('#titel').textContent).toBe("Nieuwe titel");
  });
});
```

### 🔍 Tips

* Zet `document.body.innerHTML = ...` in een `beforeEach()` voor een schone start
* Gebruik `querySelector(...)` in je test om DOM-elementen te controleren
* Je kan `vi.spyOn(console, 'log')` gebruiken om `console.log()`-uitvoer te testen


Met DOM-testen zie je meteen: werkt mijn UI-manipulatie zoals ik verwacht?

---

*Voor gevorderde gevallen (events, timers, forms) kan je later extra tools gebruiken — maar dit is genoeg voor een sterke start.*
