// this service will get and set various aspects of the customer's order
// such as:
// 1. the car
// 2. entertainment add ons
// 3. pick up/drop off locations and times (logistics)
// 4. adding the whole order to the history

import { Injectable } from '@angular/core';
import { EntertainmentCart } from '../models/entertainment-cart-model';
import { Car } from '../models/car-model';
import { Order } from '../models/order-model';
import { CarLogistics } from '../models/car-logistics-model';

@Injectable()
export class OrderService {

  // attributes that will be needed:
  // car object:
  myCar: Car;
  // entertainment cart:
  myEntertainmentCart: EntertainmentCart;

  // history array (this will eventually be pulled from DB)
  myHistory = new Array;


  // logistics for the order
  myCarLogistics: CarLogistics;

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


   // set the current logistics (pick up time/place/etc)
   setLogistics(logistics: CarLogistics) {
    this.myCarLogistics = logistics;
   }

   // get the currently set logistics
   getLogistics() {
     return this.myCarLogistics;
   }

   // add order to history
   addToHistory(currCar: Car, currEntertainment: EntertainmentCart, currLogistics: CarLogistics) {
    // eventually send to DB

    // make a hsitory object and add to the array
    // get the logistics
    let currOrder = new Order(
      currCar,
      currEntertainment,
      currLogistics
    );
    this.myHistory.push(currOrder);
   }

   // get the array of history objects
   getHistory() {
     // eventually pull from DB
     return this.myHistory;
   }
}
