import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Car } from '../../../../models/car-model';
import { OrderService } from '../../../../services/order.service';


@Component({
  selector: 'app-book-now-modal',
  templateUrl: './book-now-modal.page.html',
  styleUrls: ['./book-now-modal.page.scss'],
})
export class BookNowModalPage implements OnInit {

  @Input() carSelection: Car;

  constructor(
    public modalController: ModalController,
    private orderService: OrderService
    ) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  confirmCar() {
    // add the car to the order
    this.orderService.setCar(this.carSelection);
    // finally, dismiss the modal
    this.dismiss();
  }

}
