import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-night-life-modal',
  templateUrl: './night-life-modal.page.html',
  styleUrls: ['./night-life-modal.page.scss'],
})
export class NightLifeModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
