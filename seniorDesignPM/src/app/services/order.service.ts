// this service will get and set various aspects of the customer's order
// such as:
// 1. the car (including pick up/drop off locations and times)
// 2. entertainment add ons
// 3. adding the whole order to the history

import { Injectable } from '@angular/core';
import { EntertainmentCart } from '../models/entertainment-cart-model';


// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class OrderService {

  // attributes that will be needed:
  // car object:

  // entertainment cart:
  myEntertainmentCart: EntertainmentCart;


  constructor() {
    // set the defaults for these objects
    this.myEntertainmentCart = new EntertainmentCart(new Array);
   }

   // set the car to the order
   setCar() {

   }

   // get the car for this order
   getCar() {

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
}
