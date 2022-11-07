"use strict";
// putting in export of wait, it is considered a module. TS will yell at us
// if we do. 
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sample(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}
