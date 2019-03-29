import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookingPage } from './booking.page';
import { BookingInfoModalPage } from '../Modals/booking-info-modal/booking-info-modal.page';
import { BookNowModalPage } from '../Modals/book-now-modal/book-now-modal.page';
import { SharedHeaderModule } from '../../shared-header/shared-header.module';
import { CarInfoModalPage } from './../Modals/car-info-modal/car-info-modal.page';


const routes: Routes = [
  {
    path: '',
    component: BookingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedHeaderModule
  ],
  declarations: [BookingPage, BookingInfoModalPage, BookNowModalPage, CarInfoModalPage],
  entryComponents: [BookingInfoModalPage, BookNowModalPage, CarInfoModalPage]
})
export class BookingPageModule {}
