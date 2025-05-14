[⬅️ Unit Testing](./js-101-testing.md)

## Refactoring in JavaScript

Refactoring betekent: je code verbeteren zonder dat het gedrag verandert. Goede tests helpen je daarbij.

### Waarom refactoren?

* Je code wordt leesbaarder
* Minder duplicatie of complexiteit
* Makkelijker te testen of aan te passen

### Voorbeelden van refactoring

#### 1. Kortere functie

```js
// voor
function isEven(n) {
  if (n % 2 === 0) return true;
  return false;
}

// na
function isEven(n) {
  return n % 2 === 0;
}
```

#### 2. Vervang for-loop door .map, .filter, .reduce

```js
let som = 0;
for (let i = 0; i < lijst.length; i++) {
  som += lijst[i];
}
```

```js
let som = lijst.reduce((totaal, x) => totaal + x, 0);
```

#### 3. Gebruik default parameters

```js
// voor
function begroet(naam) {
  if (!naam) naam = "Stranger";
  return "Hallo " + naam;
}

// na
function begroet(naam = "Stranger") {
  return "Hallo " + naam;
}
```

#### 4. Extractie van code

```js
function bestel(product, prijs, korting) {
  let totaal = prijs * (1 - korting);
  console.log("Totaal: " + totaal);
}
```

Refactor naar:

```js
function berekenTotaal(prijs, korting) {
  return prijs * (1 - korting);
}

function bestel(product, prijs, korting) {
  console.log("Totaal: " + berekenTotaal(prijs, korting));
}
```

### Tip

Refactor **stap voor stap**. Laat na elke stap je tests draaien!
