import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DiningModalPage } from '../Modals/dining-modal/dining-modal.page';
import { SportsConcertsModalPage } from '../Modals/sports-concerts-modal/sports-concerts-modal.page';
import { ExperiencesModalPage } from '../Modals/experiences-modal/experiences-modal.page';
import { ConfirmCancelPage } from './../Modals/confirm-cancel/confirm-cancel.page';
import { NightLifeModalPage } from '../Modals/night-life-modal/night-life-modal.page';
import { EntertainmentItem } from './../../models/entertainment-item-model';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.page.html',
  styleUrls: ['./entertainment.page.scss'],
})
export class EntertainmentPage implements OnInit {
  numDining: any = 0;
  numSportsConcerts: any = 0;
  numExperiences: any = 0;

  // entertainment option arrays
  // dining options
  allDiningOptions = new Array;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    // get all the entertainment options here from the database

    // dining options
    let diningOpt1 = new EntertainmentItem(
      'Ristorante Lorem',
      80.00,
      'dining',
      'https://news.cruise1st.co.uk/wp-content/uploads/2017/07/Fotolia_42404790_S.jpg',
      false
    );
    let diningOpt2 = new EntertainmentItem(
      'Cafe Ipsum',
      60.00,
      'dining',
      'https://luxtravelguy.com/wp-content/uploads/2015/11/Deans-Kitchen-11-e1447052021382.jpg',
      false
    );
    this.allDiningOptions.push(diningOpt1);
    this.allDiningOptions.push(diningOpt2);
    // this.allDiningOptions.indexOf(diningOpt1);
    // diningOpt1.selectOption();
    // this.allDiningOptions.length;

  }

  // code for modals:

  // dining modal
  async presentDiningModal() {
    const modal = await this.modalController.create({
      component: DiningModalPage,
      // send in the dining options array
      componentProps: {diningArr: this.allDiningOptions}
    });

    // present the modal
    await modal.present();

    // await modal.onWillDismiss();

    // check the response for what options are picked (if any)
    const {data} = await modal.onWillDismiss();

    // console.log(data);
    this.numDining = data.numSelected;
  }











  // concerts modal
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

  async presentNightLifeModal() {
    const modal = await this.modalController.create({
      component: NightLifeModalPage
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
