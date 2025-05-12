# More Than Just a Language

> *How code, community, and values shape how we work*

---

## Why Talk About This

- Languages come with communities, assumptions, habits — all invisible at first.
- Learn multiple languages => broaden your horizons

---

## Tooling shapes behavior

Let’s look at **what’s easy**, and what that says about each language.

---


### 🟨 JavaScript

- `console.log` is your go-to.
- DevTools everywhere.
- Linting and formatting are *add-ons*, not defaults.
- Tooling is fragmented — freedom comes first.

> 💬 “Figure it out as you go.”

```js
const add = (a, b) => a + b;

console.log(add(2, 3));
console.log(add("Hello, ", "world!"));

```
- Decentralized.
- Endless frameworks, fast-changing trends.
- Community embraces hacking, remixing, making things work.

> 💬 *“Just ship it. We'll fix it later.”*

```js
NaN
```

---

### 🟦 CSharp

- Visual Studio suggests, completes, warns.
- Strong typing + IntelliSense + refactors = nudged toward structure.
- Assumes: *you're working on something big, with others.*

> 💬 “Let’s keep this maintainable.”

```csharp
string Add(string a, string b) => a + b;
int Add(int a, int b) => a + b;

Console.WriteLine(Add(2, 3));
Console.WriteLine(Add("Hello, ", "world!"));

```
- Structured, corporate-friendly.
- Strong emphasis on IDEs, patterns, and documentation.
- Community encourages architectural thinking and shared standards.

> 💬 *“Build it right the first time.”*

```csharp
CS1503: Argument 1: cannot convert from 'string' to 'int'
```

---

### 🟩 Elm

- Compiler messages are designed to help and encourage.
- Tooling emphasizes clear, beginner-friendly feedback.

> 💬 “Let’s fix this together — here’s a hint.”

```elm
addInt : Int -> Int -> Int
addInt a b =
    a + b

addStr : String -> String -> String
addStr a b =
    a ++ b

text <| String.fromInt <| addInt 2 3
text <| addStr "Hello, " "world!"
```

- Community promotes empathy and simplicity in code.

> 💬 *“Let’s make this easy to understand — even for future-you.”*

```
-- TYPE MISMATCH --

The 2nd argument to `add` is not what I expect:

    add 1 "two"
         ^^^^^

This argument is a string of text, but `add` needs the 2nd to be:

    Int
```

---

### 🟫 Haskell

- Tooling supports advanced type features and correctness proofs.
- Assumes the user values precision over convenience.

> 💬 “Your types are your spec — let’s make sure they hold.”

```haskell
addInt :: Int -> Int -> Int
addInt a b = a + b

addStr :: String -> String -> String
addStr a b = a ++ b

print (addInt 2 3)
putStrLn (addStr "Hello, " "world!")
```

- Prioritizes formal rigor and purity.
- Strong focus on types, category theory, and advanced abstractions.
- Community values correctness and elegant reasoning.

> 💬 *“Code is a proof. Make it beautiful and true.”*

```haskell
• Couldn't match expected type ‘Int’ with actual type ‘[Char]’
• In the second argument of ‘add’, namely ‘"3"’
```

---

### 🟪 Smalltalk

- The system *is* the IDE.
- You don’t write code in files — you change a living system.
- Language, tool, and runtime blur together.

> 💬 “Everything is connected.”

```smalltalk
Transcript show: (2 + 3) printString; cr.
Transcript show: ('Hello, ' , 'world!'); cr.
```

- Tight-knit, historically academic.
- Everything is live, inspectable, editable.
- Community built around exploration and elegance.

> 💬 *“The environment is the language.”*

```smalltalk
MessageNotUnderstood: SmallInteger>>,
```
