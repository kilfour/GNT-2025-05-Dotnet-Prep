## 💡 Wat is een Pull Request?

Een **pull request (PR)** is een voorstel om je code toe te voegen aan het hoofdproject. Je zegt eigenlijk:

> "Hey, ik heb iets veranderd. Kunnen jullie dit nakijken en (als het goed is) samenvoegen?"

---

## 🧭 Stappen om een Pull Request te maken

1. **Fork het project**
   Maak een kopie van het project op jouw GitHub-profiel.

2. **Clone de fork naar je computer**

   ```bash
   git clone https://github.com/jouw-gebruikersnaam/projectnaam.git
   ```

3. **Maak een aparte branch**

   ```bash
   git checkout -b mijn-verbetering
   ```

   > Een branch is een veilige zijtak. Daar werk je zonder risico op het hoofdproject.

4. **Pas de code aan**

5. **Commit en push je veranderingen**

   ```bash
   git add .
   git commit -m "Voeg nieuwe functie toe"
   git push origin mijn-verbetering
   ```

6. **Dien je pull request in op GitHub**
   Ga naar je fork → klik op "Compare & pull request" → beschrijf wat je hebt gedaan.

---

## 🔀 Hoe wissel je van branch?

Als je een andere branch wilt activeren op je computer:

```bash
git checkout naam-van-de-branch
```

Bijvoorbeeld:

```bash
git checkout main
```

Wil je eerst zien welke branches er zijn?

```bash
git branch
```

Zie je er een die nog niet lokaal bestaat? Haal die op:

```bash
git fetch origin
```

En dan:

```bash
git checkout origin/branchnaam
```

---

## 🤔 Waarom een branch gebruiken?

* **Scheiding van werk** – Je houdt nieuwe code apart van de stabiele `main`.
* **Parallele ontwikkeling** – Je kunt aan meerdere dingen tegelijk werken.
* **Makkelijk reviewen** – De pull request toont alleen de veranderingen in die branch.
* **Geen rommel in `main`** – De hoofdversie blijft proper en werkend.
* **Automatische tests/checks** – Veel projecten testen branches automatisch.

> Een branch is je veilige speelveld. Een pull request is je uitnodiging om je code aan het echte spel toe te voegen.

---

## ✅ Tips voor een goede PR

* Gebruik een duidelijke branchnaam (`feature/iets-nieuws`, `fix/bugje`)
* Beschrijf **wat** en **waarom** je iets veranderde
* Zorg dat de code werkt
* Houd het klein en overzichtelijk

---

## 📘 Voorbeeld user story

**Als** student
**Wil ik** feedback op mijn nieuwe testfunctie
**Zodat** ik weet of mijn code correct bijdraagt aan het project
