import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Order } from '../../../../models/order-model';


@Component({
  selector: 'app-history-item-modal',
  templateUrl: './history-item-modal.page.html',
  styleUrls: ['./history-item-modal.page.scss'],
})
export class HistoryItemModalPage implements OnInit {

  // set input for the order information
  @Input() currHistoryItem: Order;

  constructor(public modalController: ModalController) { }

  ngOnInit() {

  }


  dismiss() {
    // return the number of options selected (could be 0)
    this.modalController.dismiss();
  }

}
