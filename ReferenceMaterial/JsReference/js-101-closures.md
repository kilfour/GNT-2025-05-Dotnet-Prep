[⬅️ Katas](./js-101-katas.md)

## Closures in JavaScript

Een **closure** is wanneer een functie toegang behoudt tot variabelen uit zijn *buitenliggende scope*, zelfs nadat die scope is afgelopen.

### Voorbeeld

```js
function maakTeller() {
  let i = 0;
  return function() {
    i++;
    console.log(i);
  };
}

let teller = maakTeller();
teller(); // 1
teller(); // 2
```

In dit voorbeeld heeft de binnenste functie nog steeds toegang tot `i`, ook al is de buitenste functie (`maakTeller`) al afgelopen.

---

### Waarom zijn closures nuttig?

* Je kunt gegevens *onthouden* zonder globale variabelen
* Je kunt functies bouwen met intern geheugen
* Je kunt informatie *verbergen* van buitenaf

---

### Gebruik in de praktijk

#### 1. **Incrementele tellers**

```js
function createCounter(start = 0) {
  let count = start;
  return () => ++count;
}

let c = createCounter(5);
console.log(c()); // 6
console.log(c()); // 7
```

#### 2. **Private gegevens**

```js
function bankAccount() {
  let saldo = 0;

  return {
    stort(bedrag) {
      saldo += bedrag;
    },
    bekijk() {
      return saldo;
    }
  };
}

let mijnRekening = bankAccount();
mijnRekening.stort(100);
console.log(mijnRekening.bekijk()); // 100
```

#### 3. **Functies genereren**

```js
function vermenigvuldiger(factor) {
  return function(x) {
    return x * factor;
  };
}

let keer2 = vermenigvuldiger(2);
console.log(keer2(4)); // 8
```

---

### Denk eraan

Elke keer dat je een functie *retourneert* vanuit een andere functie, of *een functie binnen een functie definieert*, kun je een closure maken.

