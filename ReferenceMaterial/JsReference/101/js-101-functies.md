# Javascript 101 

## Functies

Functies zijn herbruikbare stukjes code.

### Declaratie

```js
function zegHallo(naam) {
  console.log("Hallo " + naam);
}

zegHallo("Mark");
```

### Met return-waarde

```js
function kwadraat(x) {
  return x * x;
}

console.log(kwadraat(5)); // 25
```

### Arrow functions

```js
const optellen = (a, b) => a + b;
```

### Recursie

```js
function tel(i) {
  if (i <= 5) {
    console.log(i);
    tel(i + 1);
  }
}

tel(1);
```

