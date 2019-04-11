import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-experiences-modal',
  templateUrl: './experiences-modal.page.html',
  styleUrls: ['./experiences-modal.page.scss'],
})
export class ExperiencesModalPage implements OnInit {
  // numSelected: Number = 0;

  // input for the array of experiences options and the cart
  @Input() experiencesArr;
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

  // get the number of experiences options selected
  getNumSelected() {
    let count = 0;
    for (let i = 0; i < this.experiencesArr.length; i ++) {
      if (this.experiencesArr[i].isSelected === true) {
        count++;
      }
    }
    return count;
  }


  // function to add current item to list of selected options
  addSelected(index) {
    // add the item at the index selected
    this.experiencesArr[index].selectOption();
    this.cart.addToCart(this.experiencesArr[index]);
  }

  // function to remove current item from list of selected options
  removeSelected(index) {
    // deselect the item at the index selected
    this.experiencesArr[index].cancelOption();
    this.cart.removeFromCart(this.experiencesArr[index]);
  }

}
