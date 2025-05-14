[⬅️ OOP](./js-101-oop.md)

## Functioneel Programmeren (FP)

JavaScript ondersteunt ook de functionele stijl. Je kunt functies behandelen als waarden.

### First-class functies

```js
function zegHallo() {
  console.log("Hallo");
}

let actie = zegHallo;
actie();
```

### Higher-order functies

```js
function voerUit(fn) {
  fn();
}

voerUit(() => console.log("Hallo wereld"));
```

### `.map`, `.filter`, `.reduce`

```js
let nummers = [1, 2, 3, 4];

// map
let kwadraten = nummers.map(x => x * x);

// filter
let even = nummers.filter(x => x % 2 === 0);

// reduce
let som = nummers.reduce((totaal, x) => totaal + x, 0);
```

### Pure functies

Een pure functie verandert niets buiten zichzelf.

```js
function optel(a, b) {
  return a + b;
}
```

### Immutabiliteit

```js
let lijst = [1, 2, 3];
let nieuwe = [...lijst, 4]; // originele blijft ongewijzigd
```

### Closures

```js
function teller() {
  let i = 0;
  return function() {
    i++;
    console.log(i);
  };
}

let t = teller();
t(); // 1
t(); // 2
```
