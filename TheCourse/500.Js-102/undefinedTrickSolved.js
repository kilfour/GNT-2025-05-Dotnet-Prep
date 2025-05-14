export function nameThisFunction(x) {
  if (arguments.length === 0) return "missing";
  if (x === undefined) return "explicit";
  if (x === null) return "null";
}
