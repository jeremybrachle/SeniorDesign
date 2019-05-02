import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateAccountPage } from './create-account.page';
import { CreateAccountSuccessModalPage } from '../Modals/create-account-success-modal/create-account-success-modal.page';
import { CreateAccountFailureModalPage } from '../Modals/create-account-failure-modal/create-account-failure-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CreateAccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateAccountPage, CreateAccountSuccessModalPage, CreateAccountFailureModalPage],
  entryComponents: [CreateAccountSuccessModalPage, CreateAccountFailureModalPage]
})
export class CreateAccountPageModule {}
