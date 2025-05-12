### 🧠 Uitleg

#### `undefined`

* Een variabele die **nog geen waarde heeft gekregen** is `undefined`:

  ```js
  let x;
  console.log(x); // undefined
  ```

* Een functie zonder `return` geeft `undefined` terug:

  ```js
  function doNothing() {}
  console.log(doNothing()); // undefined
  ```

#### `null`

* `null` is een **expliciete** lege waarde. Het betekent: "hier hoort iets te staan, maar het is nu bewust leeg".

  ```js
  let user = null;
  ```

#### Gelijkheid in JavaScript

| Vergelijking   | Gedrag                                           | Voorbeeld                     |
| -------------- | ------------------------------------------------ | ----------------------------- |
| `===` (strict) | vergelijkt **waarde én type**                    | `undefined === null // false` |
| `==` (losjes)  | vergelijkt **alleen waarde**, met coercion       | `undefined == null // true`   |
| `Object.is`    | zoals `===`, maar met verschil bij `NaN` en `-0` | Zie hieronder                 |

#### 🔍 Speciale gevallen: `NaN` en `-0`

##### `NaN`

* `NaN === NaN` is `false`:

  ```js
  NaN === NaN // false
  ```

* Maar `Object.is(NaN, NaN)` is `true`:

  ```js
  Object.is(NaN, NaN) // true
  ```

##### `-0`

* `-0 === 0` is `true`, maar:

  ```js
  Object.is(-0, 0) // false
  Object.is(-0, -0) // true
  ```

#### Praktijkvoorbeeld

```js
function getUsername(user) {
  if (user === undefined) {
    return 'Guest';
  }
  return user;
}

console.log(getUsername());    // "Guest"
console.log(getUsername(null)); // null
```

> ⚠️ Tip: gebruik in deze cursus altijd `===`, tenzij je héél bewust bent van `==`-gedrag.

---