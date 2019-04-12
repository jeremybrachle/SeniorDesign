import { Car } from './car-model';
import { EntertainmentCart } from './entertainment-cart-model';

export class Order {
    constructor(
        public car: Car,
        public entertainmentOpts: EntertainmentCart
    ) { }
}
