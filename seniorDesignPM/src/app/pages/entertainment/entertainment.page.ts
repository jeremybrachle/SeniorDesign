import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DiningModalPage } from '../Modals/dining-modal/dining-modal.page';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.page.html',
  styleUrls: ['./entertainment.page.scss'],
})
export class EntertainmentPage implements OnInit {
  numDining: any = 0;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentDiningModal() {
    const modal = await this.modalController.create({
      component: DiningModalPage
    });

    await modal.present();

    const {data} = await modal.onWillDismiss();
    console.log(data);
    this.numDining = data.numSelected;
  }

  cancel() {
    this.numDining = 0;
  }

}
