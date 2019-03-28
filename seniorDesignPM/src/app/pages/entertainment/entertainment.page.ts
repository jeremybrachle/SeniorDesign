import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DiningModalPage } from '../Modals/dining-modal/dining-modal.page';
import { SportsConcertsModalPage } from '../Modals/sports-concerts-modal/sports-concerts-modal.page';
import { ExperiencesModalPage } from '../Modals/experiences-modal/experiences-modal.page';
import { ConfirmCancelPage } from './../Modals/confirm-cancel/confirm-cancel.page';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.page.html',
  styleUrls: ['./entertainment.page.scss'],
})
export class EntertainmentPage implements OnInit {
  numDining: any = 0;
  numSportsConcerts: any = 0;
  numExperiences: any = 0;

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

  async presentSportsConcertsModal() {
    const modal = await this.modalController.create({
      component: SportsConcertsModalPage
    });

    await modal.present();

    const {data} = await modal.onWillDismiss();
    console.log(data);
    this.numSportsConcerts = data.numSelected;
  }

  async presentExperiencesModal() {
    const modal = await this.modalController.create({
      component: ExperiencesModalPage
    });

    await modal.present();

    const {data} = await modal.onWillDismiss();
    console.log(data);
    this.numExperiences = data.numSelected;
  }

  cancel() {
    this.numDining = 0;
    this.numSportsConcerts = 0;
    this.numExperiences = 0;
  }

  async presentCancelModal() {
    const modal = await this.modalController.create({
      component: ConfirmCancelPage,
      cssClass: 'cancel-modal'
    });

    await modal.present();

    await modal.onWillDismiss();

    this.cancel();

  }

}
