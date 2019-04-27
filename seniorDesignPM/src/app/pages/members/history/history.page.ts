import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../models/order-model';
import { ModalController } from '@ionic/angular';
import { HistoryItemModalPage } from '../Modals/history-item-modal/history-item-modal.page';


@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  // array of history objects
  orderHistory = new Array;

  constructor(
    private myOrderService: OrderService,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.orderHistory = this.myOrderService.getHistory();
  }

  // present modal for showing the order
  async showOrder(currOrder: Order) {
    const modal = await this.modalController.create({
      component: HistoryItemModalPage,
      cssClass: 'info-modal',
      componentProps: {currHistoryItem: currOrder}
    });

    await modal.present();
  }

}
