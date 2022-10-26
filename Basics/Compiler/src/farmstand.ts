// Instead of tsc individual files, we can merely do tsc and it will do all files.

interface Product {
  price: number,
  name: string,
  quantity: number
}

const printProduct = (product: Product): void => {
  console.log(`${product.name} - $${product.price}`)
}