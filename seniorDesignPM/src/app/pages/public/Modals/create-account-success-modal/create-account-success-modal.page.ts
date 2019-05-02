import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-account-success-modal',
  templateUrl: './create-account-success-modal.page.html',
  styleUrls: ['./create-account-success-modal.page.scss'],
})
export class CreateAccountSuccessModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }


  dismiss() {
    this.modalController.dismiss();
  }

}
