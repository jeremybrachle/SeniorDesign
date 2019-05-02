import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateAccountFailureModalPage } from './create-account-failure-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAccountFailureModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateAccountFailureModalPage]
})
export class CreateAccountFailureModalPageModule {}
