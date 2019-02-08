import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BookingInfoModalPage } from './booking-info-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BookingInfoModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookingInfoModalPage]
})
export class BookingInfoModalPageModule {}
