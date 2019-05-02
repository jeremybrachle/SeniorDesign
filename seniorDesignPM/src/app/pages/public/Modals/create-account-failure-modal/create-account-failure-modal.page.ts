import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-account-failure-modal',
  templateUrl: './create-account-failure-modal.page.html',
  styleUrls: ['./create-account-failure-modal.page.scss'],
})
export class CreateAccountFailureModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }


  dismiss() {
    this.modalController.dismiss();
  }

}
