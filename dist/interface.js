"use strict";
let Product1;
Product1 = {
    name: 'Apple',
    price: 2,
    itemPurchased(message) {
        console.log(message + ' ' + this.name);
    }
};
Product1.itemPurchased('you just bougth a');
//# sourceMappingURL=interface.js.map