// Day 5 - Exercise 1
interface CardItem {
    id: number
    title: string
    variantId?: number
}


function addToCart(item: CardItem) {
    console.log(`Adding "${item.title}" to cart.`);
  }

  addToCart({id: 1, title: 'shoes'});
