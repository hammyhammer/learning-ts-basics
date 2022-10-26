"use strict";
// Instead of tsc individual files, we can merely do tsc and it will do all files.
const printProduct = (product) => {
    console.log(`${product.name} - $${product.price}`);
};
