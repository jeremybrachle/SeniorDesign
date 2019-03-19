import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-experiences-modal',
  templateUrl: './experiences-modal.page.html',
  styleUrls: ['./experiences-modal.page.scss'],
})
export class ExperiencesModalPage implements OnInit {
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
