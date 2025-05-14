export function nameThisFunction() {
  let msg = "outer";
  {
    // let msg = "inner";  <-- uncommenting would break the test
  }
  return msg;
}
