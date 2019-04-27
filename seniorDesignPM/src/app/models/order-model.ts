import { Car } from './car-model';
import { EntertainmentCart } from './entertainment-cart-model';
import { CarLogistics } from './car-logistics-model';

export class Order {
    constructor(
        public car: Car,
        public entertainmentOpts: EntertainmentCart,
        public carLogistics: CarLogistics
    ) { }
}
