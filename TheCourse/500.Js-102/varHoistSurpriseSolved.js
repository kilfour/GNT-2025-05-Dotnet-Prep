export function nameThisFunction() {
  return (function() {
    console.log(a); // undefined
    var a = 5;
    return a;
  })() - 5;
}
