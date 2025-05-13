# Javascript 101 

## Objecten

Objecten zijn verzamelingen van eigenschappen (key-value).

```js
let persoon = {
  voornaam: "Gérard",
  achternaam: "Lambert",
  leeftijd: 42
};

console.log(persoon.voornaam);
persoon.leeftijd = 43;
delete persoon.achternaam;
```

Objecten kunnen ook functies bevatten (methodes):

```js
let persoon = {
  naam: "Mark",
  voorstel: function() {
    console.log("Hallo, ik ben " + this.naam);
  }
};

persoon.voorstel();
```
