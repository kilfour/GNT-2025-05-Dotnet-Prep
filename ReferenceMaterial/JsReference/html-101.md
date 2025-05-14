# HTML 101

HTML is de *structuur* van je webpagina. Denk aan de blokken en tekst — nog zonder opmaak.

### Basisstructuur

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mijn eerste pagina</title>
  </head>
  <body>
    <h1>Welkom</h1>
    <p>Dit is mijn eerste website!</p>
  </body>
</html>
```

### Veelgebruikte tags

| Tag | Betekenis |
|-----|-----------|
| `<h1>` | Titel (kop) |
| `<p>` | Paragraaf |
| `<a href="">` | Link |
| `<img src="">` | Afbeelding |
| `<ul>`, `<ol>`, `<li>` | Lijsten |
| `<div>` | Container (blok) |
| `<span>` | Inline container |
| `<input>`, `<button>` | Formulierelementen |

### Nesting

HTML is genest: tags kunnen binnen andere tags staan.

```html
<ul>
  <li>Eerste</li>
  <li>Tweede</li>
</ul>
```

### Semantiek

Gebruik tags voor hun betekenis, niet voor hoe ze eruitzien. Bijvoorbeeld: gebruik `<strong>` voor nadruk, niet `<b>` puur voor vet.

