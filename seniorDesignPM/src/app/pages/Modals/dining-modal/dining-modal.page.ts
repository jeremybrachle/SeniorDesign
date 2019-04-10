import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dining-modal',
  templateUrl: './dining-modal.page.html',
  styleUrls: ['./dining-modal.page.scss'],
})
export class DiningModalPage implements OnInit {
  // numSelected: Number = 0;

  // input for the array of dining options and the cart
  @Input() diningArr;
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

  // get the number of dining options selected
  getNumSelected() {
    let count = 0;
    for (let i = 0; i < this.diningArr.length; i ++) {
      if (this.diningArr[i].isSelected === true) {
        count++;
      }
    }
    return count;
  }


  // function to add current item to list of selected options
  addSelected(index) {
    // add the item at the index selected
    this.diningArr[index].selectOption();
    this.cart.addToCart(this.diningArr[index]);
  }

  // function to remove current item from list of selected options
  removeSelected(index) {
    // deselect the item at the index selected
    this.diningArr[index].cancelOption();
    this.cart.removeFromCart(this.diningArr[index]);
  }

}
