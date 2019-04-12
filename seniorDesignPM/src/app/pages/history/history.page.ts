import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  // array of history objects
  orderHistory = new Array;

  constructor(
    private myOrderService: OrderService
  ) { }

  ngOnInit() {
    this.orderHistory = this.myOrderService.getHistory();
  }

}
