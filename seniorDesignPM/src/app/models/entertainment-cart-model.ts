import {EntertainmentItem} from '../models/entertainment-item-model';

export class EntertainmentCart {

    // default constructor that takes in an entertainment item
    constructor(
        public items: EntertainmentItem[]
        ) { }

    // add item to cart
    addToCart(item: EntertainmentItem) {
        this.items.push(item);
    }

    // remove item from cart
    removeFromCart(item: EntertainmentItem) {
        for ( let i = 0; i < this.items.length; i++) {
            if (this.items[i] === item) {
                this.items.splice(i, 1);
            }
        }
    }

    // get the size of the cart
    getCartLength() {
        return this.items.length;
    }

    // get the cart item at a specified index
    getItemByIndex(index: number) {
        return this.items[index];
    }

    // remove all options from cart
    removeOptions() {
        let currLength: number = this.items.length;
        for (let i = 0; i < currLength; i ++) {
            this.items.pop();
        }
    }
}
