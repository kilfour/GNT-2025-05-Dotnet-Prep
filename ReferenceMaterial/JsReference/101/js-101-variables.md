[⬅️ Hello World](./js-101-hello-world.md) | [Functies ➡️](./js-101-functies.md)
## Variabelen

```js
let age = 25;
```

Een variabele is een "doosje" waarin je iets opslaat. Het sleutelwoord `let` laat ons een nieuwe variabele definiëren. We kunnen er vervolgens alles aan toekennen via het `=` teken.

```js
let age = 25; // ik ben 25 jaar
age = 36; // ik word ouder
age = 18; // ik word plots jonger
```

### Variabele types

* Getallen:

```js
let age = 25;
```

* Tekst (strings):

```js
let phrase = "Coderen is leuk!";
```

* Booleans:

```js
let isItTrue = true;
let isItFalse = false;

let ingelogd = true;
if (ingelogd) { // <= zie control-structures
  console.log("Welkom terug!");
}
```

### Getallen

```js
let age = 23;
let sisterAge = age + 11;
age += 12; // age = age + 12;
console.log(age);
```

### Rekenkundige operatoren

* Optelling
* Aftrekking
* Vermenigvuldiging
* Deling
* Modulo (rest bij deling)

### Strings

```js
let name = "Jan";
let sisterName = "Emma";
console.log("Mijn naam is " + name);
console.log("De naam van mijn zus is " + sisterName);
```

### Number()

```js
let htmlBadges = Number('5');
let cssBadges = Number('7');
let totalBadges = htmlBadges + cssBadges;
console.log('Wauw, je hebt ' + totalBadges + " badges!");
```

`Number()` converteert een string naar een getal.

**Let op met types!**

```js
console.log('10' + '5'); // "105" => strings worden aan elkaar geplakt
console.log(10 + 5); // 15 => getallen worden opgeteld
```
