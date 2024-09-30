const Product = require(`./Product`)

class Cart {
    constructor(products = [], total = 0) {
this.products = products
this.total = total
    }
    addProduct(product) {
        if(product instanceof Product) {
            this.products.push(product)
        }
        else {
            throw new Error('Product instance does not exist')
        }
        this.total = this.products.length()
    }
}