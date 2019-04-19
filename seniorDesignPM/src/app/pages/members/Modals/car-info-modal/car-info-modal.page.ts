import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-car-info-modal',
  templateUrl: './car-info-modal.page.html',
  styleUrls: ['./car-info-modal.page.scss'],
})
export class CarInfoModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  @Input() carData;

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
