interface item {
    name: string
    price: number

    itemPurchased(message: string): void
}

let Product1: item
Product1 = {
    name: 'Apple',
    price: 2,
    itemPurchased(message: string) {
        console.log(message + ' ' + this.name)
    }
}

Product1.itemPurchased('you just bougth a')