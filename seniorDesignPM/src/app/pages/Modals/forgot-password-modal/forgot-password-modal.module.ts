import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordModalPage } from './forgot-password-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ForgotPasswordModalPage]
})
export class ForgotPasswordModalPageModule {}
