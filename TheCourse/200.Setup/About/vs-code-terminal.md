## 📄 Tip: Maak een bestand en open VS Code vanuit de Terminal

Als je de terminal gebruikt, kun je heel snel bestanden maken én je projectmap openen in VS Code. Handig om snel aan de slag te gaan!

---

### 1. 📝 Maak een nieuw bestand aan

Gebruik één van de volgende manieren om een bestand `hello.txt` te maken:

* **Windows (PowerShell):**

  ```powershell
  New-Item hello.txt
  ```

* **macOS / Linux (Terminal):**

  ```bash
  touch hello.txt
  ```

Controleer of het gelukt is met:

```bash
ls    # of `dir` op Windows
```

---

### 2. 📦 Zorg dat `code` beschikbaar is

Open **VS Code** en doe het volgende:

* Open de Command Palette:

  * `Ctrl+Shift+P` (Windows/Linux)
  * `Cmd+Shift+P` (Mac)
* Typ: `Shell Command: Install 'code' command in PATH`
* Druk op Enter

Nu kun je het `code` commando gebruiken in je terminal.

---

### 3. 🚀 Gebruik `code` om je map of bestand te openen

* Open de huidige map:

  ```bash
  code .
  ```

* Open een specifiek bestand:

  ```bash
  code hello.txt
  ```

---

### 🔄 Voorbeeld: Na het klonen van een repo

```bash
git clone https://github.com/jouw-gebruiker/voorbeeld.git
cd voorbeeld
code .
```

Hiermee open je de hele map direct in VS Code.

---

👉 Handig als je snel wil wisselen tussen terminal en editor!
