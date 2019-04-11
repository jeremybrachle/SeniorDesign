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
  finalEntertainmentOpts: EntertainmentCart;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.finalEntertainmentOpts = this.orderService.getEntertainmentCart();
    console.log(this.finalEntertainmentOpts);
  }

}
