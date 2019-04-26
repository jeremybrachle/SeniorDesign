// this service will get and set various aspects of the customer's order
// such as:
// 1. the car (including pick up/drop off locations and times)
// 2. entertainment add ons
// 3. adding the whole order to the history

import { Injectable } from '@angular/core';
import { EntertainmentCart } from '../models/entertainment-cart-model';
import { Car } from '../models/car-model';
import { Order } from '../models/order-model';

@Injectable()
export class OrderService {

  // attributes that will be needed:
  // car object:
  myCar: Car;
  // entertainment cart:
  myEntertainmentCart: EntertainmentCart;
  // history array
  myHistory = new Array;

  constructor() {
    // set the defaults for these objects
    this.myEntertainmentCart = new EntertainmentCart(new Array);
   }

   // set the car to the order
   setCar(givenCar: Car) {
     // set the service's car to be the given car
     this.myCar = givenCar;
   }

   // get the car for this order
   getCar() {
    return this.myCar;
   }

   // set the entertainment cart
   setEntertainmentCart(givenCart: EntertainmentCart) {
     // first empty the service's cart (in case the user goes back and forth and adds or deletes options)
     this.myEntertainmentCart.removeOptions();
     // add the contents of the given cart to the service's cart
     for (let i = 0; i < givenCart.getCartLength(); i ++) {
       this.myEntertainmentCart.addToCart(givenCart.getItemByIndex(i));
     }
   }

   // get the entertainment cart
   getEntertainmentCart() {
     return this.myEntertainmentCart;
   }

   // add order to history
   addToHistory(currCar: Car, currEntertainment: EntertainmentCart) {
    // make a hsitory object and add to the array
    let currOrder = new Order(
      currCar,
      currEntertainment,
      null,
      null,
      null,
      null
    );
    this.myHistory.push(currOrder);
   }

   // get the array of history objects
   getHistory() {
     return this.myHistory;
   }
}
