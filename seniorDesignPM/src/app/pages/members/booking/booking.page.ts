import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookingInfoModalPage } from '../Modals/booking-info-modal/booking-info-modal.page';
import { BookNowModalPage } from '../Modals/book-now-modal/book-now-modal.page';
import { CarInfoModalPage } from './../Modals/car-info-modal/car-info-modal.page';
import { Car } from 'src/app/models/car-model';
import { CarGenerateService } from '../../../services/car-generate.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  // array of all cars
  allCars = new Array;

  constructor(
    public modalController: ModalController,
    private carGenerateService: CarGenerateService
    ) { }

  // on intitialization, get the car data
  ngOnInit() {
    // get all cars from the database:
    this.allCars = this.carGenerateService.getCarArray();
    // let imgArr1 = new Array;
    // imgArr1.push('../../../../assets/images/vantage1.jpg');
    // imgArr1.push('../../../../assets/images/vantage2.jpg');
    // imgArr1.push('../../../../assets/images/vantage3.jpg');
    // let carOpt1 = new Car(
    //   'ASTON MARTIN VANTAGE',
    //   799.99,
    //   '../../../assets/images/vantage.png',
    //   imgArr1,
    //   null,
    //   '',
    //   null,
    //   ''
    // );
    // this.allCars.push(carOpt1);
    // let imgArr2 = new Array;
    // imgArr2.push('../../../../assets/images/ferrari1.jpg');
    // imgArr2.push('../../../../assets/images/ferrari2.jpg');
    // imgArr2.push('../../../../assets/images/ferrari3.jpg');
    // let carOpt2 = new Car(
    //   'FERRARI 488',
    //   1499.99,
    //   '../../../assets/images/ferrari.png',
    //   imgArr2,
    //   null,
    //   '',
    //   null,
    //   ''
    // );
    // this.allCars.push(carOpt2);
  }

  async presentInfoModal() {
    const modal = await this.modalController.create({
      component: BookingInfoModalPage
    });

    await modal.present();
  }

  async bookNow(selectedCar: Car) {
    const modal = await this.modalController.create({
      component: BookNowModalPage,
      cssClass: 'small-modal',
      componentProps: {carSelection: selectedCar}
    });

    await modal.present();
  }

  async carInfo(currCar: Car) {
    const modal = await this.modalController.create({
      component: CarInfoModalPage,
      cssClass: 'info-modal',
      componentProps: {carData: currCar}
    });

    await modal.present();
  }

}
