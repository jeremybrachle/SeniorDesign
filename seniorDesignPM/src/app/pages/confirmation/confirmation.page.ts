import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { EntertainmentCart } from '../../models/entertainment-cart-model';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  // objects for the final order confirmation
  // entertainment cart
  finalEntertainmentOpts: EntertainmentCart;
  // array for the entertainment cart (for ease of use)
  entertainmentArr = new Array;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    // get the items from the order service:
    this.finalEntertainmentOpts = this.orderService.getEntertainmentCart();
    // put the items into the array
    for (let i = 0; i < this.finalEntertainmentOpts.getCartLength(); i ++) {
      this.entertainmentArr.push(this.finalEntertainmentOpts.getItemByIndex(i));
    }
    console.log(this.entertainmentArr);
  }


  // calculate the total cost:
  getTotal() {
    let total: Number = 0;
    // add up the costs of each entertainment options
    for (let i = 0; i < this.entertainmentArr.length; i ++) {
      total += this.entertainmentArr[i].price;
    }

    // add cost of car

    return total;
  }
}
