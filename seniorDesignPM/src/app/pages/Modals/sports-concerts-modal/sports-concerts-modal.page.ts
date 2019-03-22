import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sports-concerts-modal',
  templateUrl: './sports-concerts-modal.page.html',
  styleUrls: ['./sports-concerts-modal.page.scss'],
})
export class SportsConcertsModalPage implements OnInit {
  numSelected: Number = 0;

  constructor(public modalController: ModalController) {
  }

  ngOnInit() {
  }

  // currently hardcoded with 1, change this later!!
  dismissWithData() {
    this.numSelected = 1;
    // console.log(this.numSelected);
    this.modalController.dismiss({numSelected: this.numSelected});
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
