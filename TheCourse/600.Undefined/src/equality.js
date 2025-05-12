export function getX() {
    let x;
    return x;
}

export function doNothing() {

}

export function isStrictlyEqual(a, b) {
    return a === b;
}

export function isLooselyEqual(a, b) {
    return a == b;
}

export function isSame(a, b) {
    return Object.is(a, b);
}