import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-booking-info-modal',
  templateUrl: './booking-info-modal.page.html',
  styleUrls: ['./booking-info-modal.page.scss'],
})
export class BookingInfoModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
