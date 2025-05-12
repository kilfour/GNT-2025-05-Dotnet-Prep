## JavaScript Variables

Modern JavaScript offers two ways to declare variables: `let` and `const`. 

---

### ✅ `let` — Block-Scoped and Reassignable

- Scoped to the block (`{}`) it is declared in
- Can be reassigned, but **not re-declared** in the same scope

```js
let x = 10;
{
  let x = 20; // separate variable
  console.log(x); // 20
}
console.log(x); // 10
```

---
### 🔒 `const` — Block-Scoped and Immutable

- Also introduced in ES6
- Must be assigned a value at declaration
- Cannot be reassigned or re-declared
- Block-scoped just like `let`

```js
const pi = 3.14;
// pi = 3.1415; // ❌ TypeError: Assignment to constant variable
```

> Note: `const` prevents reassignment, **not mutation**. Objects and arrays declared with `const` can still be modified.

```js
const user = { name: "Alice" };
user.name = "Bob"; // ✅ allowed
```

---

### 🎩 Hoisting 

```js
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 5;
```

- Both `let` and `const` exist in a **temporal dead zone (TDZ)** until they are declared

---

### 🔁 Re-declaration

```js
let x = 1;
let x = 2; // SyntaxError: Identifier 'x' has already been declared

const y = 1;
const y = 2; // SyntaxError: Identifier 'y' has already been declared
```

---

### ✅ Best Practices

- Use `const` by default
- Use `let` only when you know the value will change
- Avoid `var` — it's legacy and introduces subtle bugs

---

### ⚠️ What about `var`?

`var` is the older way of declaring variables in JavaScript. It is **function-scoped**, **hoisted**, and can be **re-declared**, which can lead to confusing behavior:

```js
var x = 10;
{
  var x = 20; // same variable!
  console.log(x); // 20
}
console.log(x); // 20 (surprise!)
```

Use `let` and `const` instead. Treat `var` as legacy — unless you’re maintaining old JavaScript code from the before-times. 😄

