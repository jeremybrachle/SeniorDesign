import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-accommodations-modal',
  templateUrl: './accommodations-modal.page.html',
  styleUrls: ['./accommodations-modal.page.scss'],
})
export class AccommodationsModalPage implements OnInit {
  // numSelected: Number = 0;

  // input for the array of accommodations options and the cart
  @Input() accommodationsArr;
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

  // get the number of accommodations options selected
  getNumSelected() {
    let count = 0;
    for (let i = 0; i < this.accommodationsArr.length; i ++) {
      if (this.accommodationsArr[i].isSelected === true) {
        count++;
      }
    }
    return count;
  }


  // function to add current item to list of selected options
  addSelected(index) {
    // add the item at the index selected
    this.accommodationsArr[index].selectOption();
    this.cart.addToCart(this.accommodationsArr[index]);
  }

  // function to remove current item from list of selected options
  removeSelected(index) {
    // deselect the item at the index selected
    this.accommodationsArr[index].cancelOption();
    this.cart.removeFromCart(this.accommodationsArr[index]);
  }

}
