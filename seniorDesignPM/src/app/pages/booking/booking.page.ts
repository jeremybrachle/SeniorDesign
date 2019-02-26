import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookingInfoModalPage } from '../Modals/booking-info-modal/booking-info-modal.page';
import { BookNowModalPage } from '../Modals/book-now-modal/book-now-modal.page';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: BookingInfoModalPage
    });

    await modal.present();
  }

  async bookNow() {
    const modal = await this.modalController.create({
      component: BookNowModalPage,
      cssClass: 'small-modal'
    });

    await modal.present();
  }

}
