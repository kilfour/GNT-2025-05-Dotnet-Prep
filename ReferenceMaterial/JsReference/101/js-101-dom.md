## DOM-manipulatie

### Selectie

```js
document.querySelector("#id")
document.querySelectorAll(".klasse")
document.getElementById("id")
document.getElementsByClassName("klasse")
document.getElementsByTagName("tag")
```

### Inhoud aanpassen

```js
document.querySelector("#titel").textContent = "Nieuwe titel";
document.querySelector(".inhoud").innerHTML = "<p>HTML inhoud</p>";
```
⚠️ **Veiligheidstip**: Pas op met `innerHTML`.
`innerHTML` kan handig zijn, maar het voegt onbewerkte HTML toe aan de pagina. Dat betekent dat als je er gebruikersinvoer in plaatst, iemand kwaadaardige code (zoals `<script>`) kan insluiten.

```js
let naam = "<img src=x onerror=alert('Hacked')>";
document.body.innerHTML = "Welkom " + naam;
```

### Stijl aanpassen

```js
document.querySelector("body").style.backgroundColor = "lightblue";
```

### Element toevoegen

```js
let nieuwDiv = document.createElement("div");
nieuwDiv.textContent = "Hallo";
document.body.appendChild(nieuwDiv);
```

### Event listeners

```js
document.querySelector("button").addEventListener("click", () => {
  alert("Je klikte op de knop!");
});
```

---

✅ Je hebt nu een overzicht van de belangrijkste JS-thema's: variabelen, controle, arrays, functies, objecten en DOM. Veel succes met de oefeningen!
