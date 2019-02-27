import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntertainmentPage } from './entertainment.page';
import { SharedHeaderModule } from '../../shared-header/shared-header.module';
import { DiningModalPage } from '../Modals/dining-modal/dining-modal.page';

const routes: Routes = [
  {
    path: '',
    component: EntertainmentPage
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
  declarations: [EntertainmentPage, DiningModalPage],
  entryComponents: [DiningModalPage]
})
export class EntertainmentPageModule {}
