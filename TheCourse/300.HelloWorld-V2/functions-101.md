## 🔢 Functions 101

### 📝 Doel

Begrijpen wat een functie is, hoe je er een schrijft, en hoe je die aanroept.

---

### 🧠 Wat is een functie?

Een **functie** is een blok code dat je een naam geeft en later kunt hergebruiken.
Je roept een functie aan om iets uit te voeren of om een resultaat terug te krijgen.

---

### 📁 Voorbeeld 1: een simpele functie

```js
function greet() {
    console.log("Hoi!");
}

// functie aanroepen:
greet();
```

Dit print "Hoi!" in de console.

---

### 📁 Voorbeeld 2: functie met een parameter

```js
function greet(name) {
    console.log("Hoi, " + name + "!");
}

greet("Mark"); // print: Hoi, Mark!
```

Je kunt gegevens meegeven aan een functie via **parameters**.

---

### 📁 Voorbeeld 3: functie die iets teruggeeft

```js
function square(x) {
    return x * x;
}

console.log(square(5)); // print: 25
```

De `return`-waarde kun je gebruiken in andere stukken code.

---

### 🔀 Samengevat

* Je definieert een functie met `function naam(...) { ... }`
* Je roept een functie aan met `naam(...)`
* Functies kunnen gegevens binnenkrijgen (**parameters**) en teruggeven (**return**)

---

### 🌐 Extra

In moderne JavaScript kun je ook functies schrijven als **expressies**:

```js
const square = (x) => x * x;
```

Deze pijlfuncties ("arrow functions") zijn korter en handig in veel situaties.

---
