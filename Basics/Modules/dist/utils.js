// putting in export of wait, it is considered a module. TS will yell at us
// if we do. 
export function add(x, y) {
    return x + y;
}
export function sample(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}
export const pi = 3.14;
