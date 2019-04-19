import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-night-life-modal',
  templateUrl: './night-life-modal.page.html',
  styleUrls: ['./night-life-modal.page.scss'],
})
export class NightLifeModalPage implements OnInit {
  // numSelected: Number = 0;

  // input for the array of nightLife options and the cart
  @Input() nightLifeArr;
  @Input() cart;

  constructor(public modalController: ModalController) {
  }

  ngOnInit() {
  }

  // dismiss the modal and return the number of options selected
  dismiss() {
    // return the number of options selected (could be 0)
    this.modalController.dismiss({numSelected: this.getNumSelected()});
  }

  // get the number of nightLife options selected
  getNumSelected() {
    let count = 0;
    for (let i = 0; i < this.nightLifeArr.length; i ++) {
      if (this.nightLifeArr[i].isSelected === true) {
        count++;
      }
    }
    return count;
  }


  // function to add current item to list of selected options
  addSelected(index) {
    // add the item at the index selected
    this.nightLifeArr[index].selectOption();
    this.cart.addToCart(this.nightLifeArr[index]);
  }

  // function to remove current item from list of selected options
  removeSelected(index) {
    // deselect the item at the index selected
    this.nightLifeArr[index].cancelOption();
    this.cart.removeFromCart(this.nightLifeArr[index]);
  }

}
