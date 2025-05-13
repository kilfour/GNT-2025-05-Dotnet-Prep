[⬅️ Objecten](./js-101-object.md) | [Controle Structuren ➡️](./js-101-control-structures.md)
## Arrays 

Arrays zijn verzamelingen van gegevens in een vaste volgorde. Je kunt meerdere waarden in één variabele opslaan.

### Declaratie

```js
let legeArray = [];
let nummers = [1, 2, 3];
let fruit = ["Appel", "Peer", "Banaan"];
```

### Toegang tot elementen

```js
let namen = ["Gérard", "Lambert"];
console.log("Hallo " + namen[0] + " " + namen[1]);
```

Let op: indexen beginnen bij 0.

### Array aanpassen

```js
let cijfers = [1, 2, 3];
cijfers[2] = 4;
console.log(cijfers); // [1, 2, 4]
```

### Lengte van een array

```js
let cijfers = [1, 2, 3];
console.log("Lengte: " + cijfers.length);
```

### Elementen toevoegen/verwijderen

```js
let fruit = ["Appel", "Peer", "Banaan"];
fruit.push("Kers");     // voegt toe aan het einde
fruit.pop();             // verwijdert het laatste element
```

Andere nuttige methodes:

* `unshift()` → voegt toe aan het begin
* `shift()` → verwijdert van het begin
* `indexOf()` → zoekt de index van een item
* `join()` → maakt een string van het array
* `slice()` → maakt een kopie van een deel
* `splice()` → verwijdert/vervangt/voegt toe op positie

### Itereren over arrays

```js
let fruit = ["Appel", "Peer", "Banaan"];
for (let stuk of fruit) {
  console.log("Wil je een " + stuk + "?");
}
```

