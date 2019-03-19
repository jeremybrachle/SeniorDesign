import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SportsConcertsModalPage } from './sports-concerts-modal.page';

const routes: Routes = [
  {
    path: '',
    component: SportsConcertsModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SportsConcertsModalPage]
})
export class SportsConcertsModalPageModule {}
