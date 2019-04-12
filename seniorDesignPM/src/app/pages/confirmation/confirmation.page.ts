import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { EntertainmentCart } from '../../models/entertainment-cart-model';
import { Car } from 'src/app/models/car-model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  // objects for the final order confirmation
  // car for order
  finalCar: Car;
  // entertainment cart
  finalEntertainmentOpts: EntertainmentCart;
  // array for the entertainment cart (for ease of use)
  entertainmentArr = new Array;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    // get the items from the order service:
    // get the selected car
    this.finalCar = this.orderService.getCar();
    // get the entertainment options
    this.finalEntertainmentOpts = this.orderService.getEntertainmentCart();
    // put the items into the array
    for (let i = 0; i < this.finalEntertainmentOpts.getCartLength(); i ++) {
      this.entertainmentArr.push(this.finalEntertainmentOpts.getItemByIndex(i));
    }
  }


  // calculate the total cost:
  getTotal() {
    let total: number = 0;
    // add up the costs of each entertainment options
    for (let i = 0; i < this.entertainmentArr.length; i ++) {
      total += this.entertainmentArr[i].price;
    }

    // add cost of car
    total += this.finalCar.price;
    return total;
  }

  // finish the order and asdd to history
  completeOrder() {
    this.orderService.addToHistory(
      this.finalCar,
      this.finalEntertainmentOpts
    );
  }
}
