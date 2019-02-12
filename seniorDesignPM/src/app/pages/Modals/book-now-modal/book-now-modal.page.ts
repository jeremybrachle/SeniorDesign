import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-book-now-modal',
  templateUrl: './book-now-modal.page.html',
  styleUrls: ['./book-now-modal.page.scss'],
})
export class BookNowModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
