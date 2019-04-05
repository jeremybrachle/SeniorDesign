import {EntertainmentItem} from '../models/entertainment-item-model';

export class EntertainmentCart {
    constructor(public items: EntertainmentItem[]){}

    addItem(item: EntertainmentItem)
    {
        this.items.push(item);
    }

    removeItem(item: EntertainmentItem)
    {
        for ( let i = 0; i < this.items.length; i++) {
            if (this.items[i] === item) {
                this.items.splice(i, 1);
            }
        }
    }
}