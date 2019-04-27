import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistoryPage } from './history.page';
import { SharedHeaderModule } from '../../../shared-header/shared-header.module';
import { HistoryItemModalPage } from '../Modals/history-item-modal/history-item-modal.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryPage
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
  declarations: [HistoryPage, HistoryItemModalPage],
  entryComponents: [HistoryItemModalPage]
})
export class HistoryPageModule {}
