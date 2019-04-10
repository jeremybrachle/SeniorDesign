import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DiningModalPage } from '../Modals/dining-modal/dining-modal.page';
import { SportsConcertsModalPage } from '../Modals/sports-concerts-modal/sports-concerts-modal.page';
import { ExperiencesModalPage } from '../Modals/experiences-modal/experiences-modal.page';
import { ConfirmCancelPage } from './../Modals/confirm-cancel/confirm-cancel.page';
import { NightLifeModalPage } from '../Modals/night-life-modal/night-life-modal.page';
import { EntertainmentItem } from './../../models/entertainment-item-model';
import { EntertainmentCart } from './../../models/entertainment-cart-model';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.page.html',
  styleUrls: ['./entertainment.page.scss'],
})
export class EntertainmentPage implements OnInit {
  // variables for the number of options selected for each type of add on
  numDining: any = 0;
  numSportsConcerts: any = 0;
  numAccomodations: any = 0;
  numNightLife: any = 0;
  numExperiences: any = 0;

  // entertainment option arrays
  allDiningOptions = new Array;
  allSportsConcertsOptions = new Array;
  allAccomodationsOptions = new Array;
  allNightLifeOptions = new Array;
  allExperiencesOptions = new Array;

  // make a cart object for holding only the selected entertainment options
  // first make an array of entertainment items
  // cartItems = new Array;
  // customerCart = new EntertainmentCart(this.cartItems);
  customerCart = new EntertainmentCart(new Array);

  // constructor (make a modal controller)
  constructor(public modalController: ModalController) { }

  // on initialization, get the data
  ngOnInit() {
    // get all the entertainment options here from the database

    // 1. dining options
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

    // 2. sports options
    let sportsConcertsOpt1 = new EntertainmentItem(
      'Cowboys Game',
      1000.00,
      'sportsConcerts',
      'https://images-na.ssl-images-amazon.com/images/I/41HYP2h9tML._SL500_AC_SS350_.jpg',
      false
    );
    this.allSportsConcertsOptions.push(sportsConcertsOpt1);

    // 3. accomodations options
    let accomodationsOpt1 = new EntertainmentItem(
      'yeet',
      0.00,
      'accomodations',
      'yeet',
      false
    );
    this.allAccomodationsOptions.push(accomodationsOpt1);

    // 4. night life options
    let nightLifeOpt1 = new EntertainmentItem(
      'Sample Night Life',
      340.00,
      'nightLife',
      'https://media.timeout.com/images/100898801/630/472/image.jpg',
      false
    );
    this.allNightLifeOptions.push(nightLifeOpt1);

    // 5. experiences toptions
    let experiencesOpt1 = new EntertainmentItem(
      'Sample Helicopter Ride',
      1000.00,
      'experiences',
      'https://epichelicopters.com/assets/site_images/_380x215_crop_center-center_100/dallas-fort-worth-aerial-video_0.jpg',
      false
    );
    this.allExperiencesOptions.push(experiencesOpt1);



    // this.customerCart.addToCart(diningOpt1);
    // this.customerCart.addToCart(diningOpt2);
    // console.log(this.customerCart);
    // console.log(this.customerCart.getCartLength());

  }

  // code for modals:

  // 1. dining modal
  async presentDiningModal() {
    const modal = await this.modalController.create({
      component: DiningModalPage,
      // send in the dining options array
      componentProps: {
        diningArr: this.allDiningOptions,
        cart: this.customerCart
      }
    });

    // present the modal
    await modal.present();

    // check the response for what options are picked (if any)
    const {data} = await modal.onWillDismiss();

    // set the number of dining options selected
    this.numDining = data.numSelected;
  }

  // 2. concerts modal
  async presentSportsConcertsModal() {
    const modal = await this.modalController.create({
      component: SportsConcertsModalPage,
      // send in the sports/concerts options array
      componentProps: {
        sportsConcertsArr: this.allSportsConcertsOptions,
        cart: this.customerCart
      }
    });

    // present the modal
    await modal.present();

    // check the response for what options are picked (if any)
    const {data} = await modal.onWillDismiss();

    // set the number of sports/concerts options selected
    this.numSportsConcerts = data.numSelected;
  }

  // 4. night life modal
  async presentNightLifeModal() {
    const modal = await this.modalController.create({
      component: NightLifeModalPage,
      // send in the night life options array
      componentProps: {
        nightLifeArr: this.allNightLifeOptions,
        cart: this.customerCart
      }
    });

    // present the modal
    await modal.present();

    // check the response for what options are picked (if any)
    const {data} = await modal.onWillDismiss();

    // set the number of night life options selected
    this.numNightLife = data.numSelected;
  }

  // 5. experiences modal
  async presentExperiencesModal() {
    const modal = await this.modalController.create({
      component: ExperiencesModalPage,
      // send in the experiences options array
      componentProps: {
        experiencesArr: this.allExperiencesOptions,
        cart: this.customerCart
      }
    });

    // present the modal
    await modal.present();

    // check the response for what options are picked (if any)
    const {data} = await modal.onWillDismiss();

    // set the number of dining options selected
    this.numExperiences = data.numExperiences;
  }

  // reset the values of the variables for selected options
  cancel() {
    this.numDining = 0;
    this.numSportsConcerts = 0;
    this.numAccomodations = 0;
    this.numNightLife = 0;
    this.numExperiences = 0;
  }

  // cancel confirm modal
  async presentCancelModal() {
    const modal = await this.modalController.create({
      component: ConfirmCancelPage,
      cssClass: 'cancel-modal'
    });
    // show the modal and dismiss it
    await modal.present();
    await modal.onWillDismiss();
    // reset the variables
    this.cancel();
  }

}
