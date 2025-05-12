```js
function sumPositiveNumbers(arr) {
  // your code here
}

sumPositiveNumbers([1, -2, 3, 4, -5]); // → 8

function sumPositiveNumbers(arr) {
  return arr.filter(n => n > 0).reduce((a, b) => a + b);
}

console.assert(sumPositiveNumbers([1, -2, 3]) === 4);
console.assert(sumPositiveNumbers([-5, 10]) === 10);

sumPositiveNumbers([-1, -2, -3]); // 💥 TypeError
```
--- slide ---
```js
function isPalindrome(str) {
  // your code here
}
// gotcha upper/lower
```
--- slide ---
```js
function maxNumber(arr) {
  // your code here, don't use math max
}
// gotcha : lexical sort
//  negative numbers
```
--- slide ---
```js
function countVowels(str) {
  // your code here
}
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || "e" || "i" || "o" || "u") {
      count++;
    }
  }
  return count;
}
console.assert(countVowels("hello") === 2);
console.assert(countVowels("hi") === 1);
console.assert(countVowels("xyz") === 0); // 💥 returns 3
```
--- slide ---
```js
function repeatString(str, times) {
  // your code here
}
console.assert(repeatString("a", 3) === "aaa");
console.assert(repeatString("ok", 2) === "okok");
repeatString("hi", 3); // → "hihihi"
function repeatString(str, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
}
```