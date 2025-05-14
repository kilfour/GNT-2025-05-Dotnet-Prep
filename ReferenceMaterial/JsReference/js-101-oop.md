[⬅️ DOM Manipulatie](./js-101-dom.md)

## Object-Georiënteerd Programmeren (OOP)

JavaScript ondersteunt OOP via *prototypes* en via de modernere `class`-syntaxis.

### Constructorfunctie

```js
function Persoon(naam) {
  this.naam = naam;
  this.groet = function() {
    console.log("Hallo, ik ben " + this.naam);
  };
}

let p = new Persoon("Emma");
p.groet(); // "Hallo, ik ben Emma"
```

### Prototype

```js
function Dier(soort) {
  this.soort = soort;
}
Dier.prototype.geluid = function() {
  console.log("Een " + this.soort + " maakt geluid");
};

let kat = new Dier("kat");
kat.geluid();
```

### Class-syntaxis

```js
class Auto {
  constructor(merk) {
    this.merk = merk;
  }

  start() {
    console.log(this.merk + " start!");
  }
}

let a = new Auto("Volvo");
a.start();
```

### Inheritance

```js
class Dier {
  maakGeluid() {
    console.log("Geluid!");
  }
}

class Hond extends Dier {
  maakGeluid() {
    console.log("Blaff!");
  }
}

let h = new Hond();
h.maakGeluid(); // "Blaff!"
```

### `this` Gedrag

Let op: `this` werkt anders in arrow functions.

```js
let persoon = {
  naam: "Sara",
  zegHallo: function() {
    console.log("Hallo " + this.naam);
  },
  fout: () => {
    console.log("Hallo " + this.naam); // werkt niet goed
  }
};
```
