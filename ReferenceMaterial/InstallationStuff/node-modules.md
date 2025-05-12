### 📆 `package.json` vs `package-lock.json`

When you install dependencies in a Node project, you’ll notice two important files:

#### ✅ `package.json`

* Lists the **main dependencies** your project needs.
* You (or your tools) write and edit this.
* Allows flexible versioning like `^1.0.0` (which means “latest compatible version”).

#### 🔒 `package-lock.json`

* Automatically created by `npm install`.
* Locks **exact versions** (including sub-dependencies), so installs are predictable.
* **Should always be committed** — it ensures your teammates (and your future self) get the same working setup.

#### 🧹 Pro tip:

If something seems broken or inconsistent:

```bash
rm -rf node_modules package-lock.json
npm install
```

This resets your dependencies cleanly.

---

### 📁 What is `node_modules/` and why is it in `.gitignore`?

* This folder is created by `npm install`
* It contains **all the actual code** for every dependency and sub-dependency
* It can be **very large** (hundreds of MB)
* It is **reproducible** using `package-lock.json`, so you don’t need to commit it

That’s why `.gitignore` always includes:

```gitignore
node_modules/
```
