import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccommodationsModalPage } from './accommodations-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AccommodationsModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccommodationsModalPage]
})
export class AccommodationsModalPageModule {}
