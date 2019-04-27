import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Car } from '../../../../models/car-model';
import { OrderService } from '../../../../services/order.service';
import { CarLogistics } from '../../../../models/car-logistics-model';

@Component({
  selector: 'app-book-now-modal',
  templateUrl: './book-now-modal.page.html',
  styleUrls: ['./book-now-modal.page.scss'],
})
export class BookNowModalPage implements OnInit {

  // input the car from the booking page
  @Input() carSelection: Car;

  // objects for logistics
  pickUpLocation: String;
  dropOffLocation: String;
  pickUpDate: Date;
  pickUpTime: Date;
  dropOffDate: Date;
  dropOffTime: Date;


  // create objects for the services
  constructor(
    public modalController: ModalController,
    private orderService: OrderService
    ) { }

  ngOnInit() {
  }

  // close the modal
  dismiss() {
    this.modalController.dismiss();
  }

  // apply the selections to the order
  confirmCar() {
    // apply the attributes to the logistics object
    let logistics = new CarLogistics(
      this.pickUpLocation,
      this.dropOffLocation,
      this.pickUpDate,
      this.pickUpTime,
      this.dropOffDate,
      this.dropOffTime
    );

    // set the logistics
    this.orderService.setLogistics(logistics);
    // add the car to the order
    this.orderService.setCar(this.carSelection);
    // finally, dismiss the modal
    this.dismiss();
  }

}
