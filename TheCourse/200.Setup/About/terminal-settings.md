# Terminalinstellingen voor Node.js en npm

## Windows

### Aanbevolen terminals

* PowerShell
* Git Bash (meegeleverd met [Git voor Windows](https://git-scm.com/download/win))
* Windows Terminal (geavanceerd, handig als je meerdere shells gebruikt)

### Node.js controleren

Open een terminal en typ:

```bash
node -v
npm -v
```

### Als dit niet werkt

* Controleer of Node.js tijdens installatie is toegevoegd aan je `PATH` (standaard is dit aangevinkt).
* Herstart je terminal of pc als `node` nog niet wordt herkend.

---

## macOS of Linux

### Aanbevolen shells

* Terminal (macOS standaard)
* iTerm2 (alternatief voor macOS)
* GNOME Terminal, Konsole, etc. op Linux

### Shell-profielen

Zorg dat Node.js in je pad staat door dit toe te voegen aan één van de volgende bestanden (afhankelijk van je shell):

* `~/.bashrc`
* `~/.zshrc`
* `~/.profile`

Bijvoorbeeld:

```bash
export PATH="$HOME/.npm-global/bin:$PATH"
```

Herlaad je profiel met:

```bash
source ~/.bashrc  # of ~/.zshrc of ~/.profile afhankelijk van wat je gebruikt
```

### Controleren

```bash
node -v
npm -v
```

Als deze commando’s versienummers tonen, is alles goed ingesteld.

### Tip

Gebruik [nvm](https://github.com/nvm-sh/nvm) om meerdere Node-versies makkelijk te beheren. Voeg `nvm` toe aan je profielbestand volgens hun instructies.
