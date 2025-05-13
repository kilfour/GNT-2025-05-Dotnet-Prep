## JavaScript Variabelen

Moderne JavaScript biedt twee manieren om variabelen te declareren: `let` en `const`.

---

### ✅ `let` — Block-Scoped en Mutable

* Geldig binnen het blok (`{}`) waarin het gedeclareerd is
* Kan opnieuw worden toegekend, maar **niet opnieuw gedeclareerd** in hetzelfde bereik

```js
let x = 10;
{
  let x = 20; // aparte variabele
  console.log(x); // 20
}
console.log(x); // 10
```

---

### 🔒 `const` — Block-Scoped en Immutable

* Ook geïntroduceerd in ES6
* Moet een waarde krijgen bij declaratie
* Kan **niet** worden herkend of opnieuw gedeclareerd
* Block-scoped net als `let`

```js
const pi = 3.14;
// pi = 3.1415; // ❌ TypeError: Assignment to constant variable
```

> Opmerking: `const` voorkomt her-toewijzing, **niet mutatie**. Objecten en arrays gedeclareerd met `const` kunnen nog steeds aangepast worden.

```js
const gebruiker = { naam: "Alice" };
gebruiker.naam = "Bob"; // ✅ toegestaan
```

---

### 🎩 Hoisting

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 5;
```

* Zowel `let` als `const` bestaan in een **temporale dode zone (TDZ)** tot ze gedeclareerd zijn

---

### ♻️ Opnieuw Declareren

```js
let x = 1;
let x = 2; // SyntaxError: Identifier 'x' has already been declared

const y = 1;
const y = 2; // SyntaxError: Identifier 'y' has already been declared
```

---

### ✅ Best Practices

* Gebruik `const` standaard
* Gebruik `let` alleen als je weet dat de waarde gaat veranderen
* Vermijd `var` — het is verouderd en kan subtiele bugs veroorzaken

---

### ⚠️ En `var` dan?

`var` is de oudere manier om variabelen te declareren in JavaScript. Het is **functie-gebaseerd**, **gehoist**, en kan **opnieuw gedeclareerd** worden, wat tot verwarrend gedrag kan leiden:

```js
var x = 10;
{
  var x = 20; // dezelfde variabele!
  console.log(x); // 20
}
console.log(x); // 20 (verrassing!)
```

Gebruik liever `let` en `const`. Behandel `var` als legacy — tenzij je oude JavaScriptcode onderhoudt uit het tijdperk van voor ES6. 😄
