const a = Number(prompt('Enter A'));
const b = Number(prompt('Enter B'));
const c = Number(prompt('Enter C'));
let x1 = Number;
let x2 = Number;

const result = solveQuadr(a, b, c);

document.write(result);

function solveQuadr(a, b, c) {
    const d = discr(a, b, c);
    if (d === 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        return ('x1' + x1 + 'x2' + x2);
    }
    if (d > 0) {
        x1 = (-b - Math.sqrt(d)) / (2 * a);
        x2 = (-b + Math.sqrt(d)) / (2 * a);
        return ('x1' + x1 + 'x2' + x2);
    }
    if (d < 0) {
        return 'Discriminant is negative';
    }
}

function discr(a, b, c) {
    return ((b * b) - 4 * a * c);
}
