## 🧩 Story: Begrijp `undefined`, `null`, en gelijkheid in JavaScript

**Als** developer  
**Wil ik** het verschil begrijpen tussen `undefined`, `null`, en hoe gelijkheid werkt in JavaScript  
**Zodat** ik bugs kan vermijden en de juiste verwachtingen kan hebben bij testresultaten  

### ✅ Acceptatiecriteria

* [ ] Ik begrijp wanneer iets `undefined` is
* [ ] Ik weet wat `null` betekent
* [ ] Ik weet het verschil tussen `==`, `===`, en `Object.is`
* [ ] Ik kan uitleggen waarom `NaN !== NaN` en `-0 !== 0` (via `Object.is`)

### 🔧 Taken

* [ ] Pas de testen in equality.test.js zodat ze allemaal slagen.

### 🧮 Estimate: 

## 🔮 Oefening: Schrijf je eerste functie

### 📝 Doel

Leer hoe je een eenvoudige functie schrijft die getest wordt met Vitest.

---

### 📂 Bestanden

In deze map staan twee bestanden:

* `hello-world.test.js` → bevat een test die controleert of jouw functie werkt
* `hello-world.js` → dit bestand moet je zelf invullen

---

### 🗭️ Stappen

1. **Open `hello-world.js`**

   Voeg daar deze functie toe:

   ```js
   export function helloWorld() {
       return "Hello World";
   }
   ```

2. **Voer de test uit in je terminal**

   ```bash
   npx vitest run
   ```

3. ✅ Als alles goed is, zie je iets als:

   ```
   ✓ greets the world
   ```

---

### 🔍 Uitleg

* De test gebruikt `expect(...).toBe(...)` om te controleren wat je functie teruggeeft.
* Als je functie `"Hello wereld"` of `"hello world"` teruggeeft, zal de test falen — want hoofdletters en spaties tellen mee!

---

### 🎯 Bonus

* Probeer de test expres te laten falen (door `"Hallo!"` te retourneren) en kijk wat Vitest zegt.
* Voeg een tweede functie toe, zoals `helloName(name)` die `"Hello, Mark"` retourneert.

---

### 🎉 Tip: Gebruik de Vitest UI

Je kunt ook een visuele testweergave starten:

```bash
npm run test:ui
```

* Je ziet de testresultaten live in je browser
* Je kunt daar tests opnieuw draaien en foutmeldingen makkelijker begrijpen

Als dit commando niet werkt, controleer dan of je `@vitest/ui` hebt geïnstalleerd in `package.json`.

---
