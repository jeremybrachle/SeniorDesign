import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-cancel',
  templateUrl: './confirm-cancel.page.html',
  styleUrls: ['./confirm-cancel.page.scss'],
})
export class ConfirmCancelPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
