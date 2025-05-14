export function nameThisFunction() {
  return (function decision() {
    return inner(); // works due to hoisting

    function inner() {
      return "yes";
    }
  })();
}
