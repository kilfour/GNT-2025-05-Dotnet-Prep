[⬅️ Arrays](./js-101-arrays.md) | [DOM Manipulatie ➡️](./js-101-dom.md)

## Control Structures (Besturingsstructuren)

### Vergelijkingsoperatoren

* `===` → waar als beide zijden exact gelijk zijn
* `!==` → waar als beide zijden verschillend zijn
* `>` → waar als links groter is dan rechts
* `<` → waar als links kleiner is dan rechts
* `>=` → waar als links groter of gelijk is aan rechts
* `<=` → waar als links kleiner of gelijk is aan rechts

### Logische operatoren

* `&&` → waar als beide condities waar zijn
* `||` → waar als minstens één conditie waar is
* `!` → keert een waarde om (waar wordt onwaar, en andersom)

### if / else

```js
let lengte = 185;
let gewicht = 80;
if ((lengte >= 150) || (gewicht >= 45)) {
  console.log("Je bent waarschijnlijk een volwassene");
} else {
  console.log("Je bent waarschijnlijk een kind");
}
```

### else if

```js
if (score >= 90) {
  console.log("Uitstekend!");
} else if (score >= 75) {
  console.log("Goed gedaan!");
} else {
  console.log("Blijven oefenen!");
}
```

### while-lus

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i += 1;
}
```

### for-lus

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Gebruik `for` als je weet hoe vaak iets moet gebeuren. Gebruik `while` als je iets wil blijven herhalen zolang een conditie waar is.
