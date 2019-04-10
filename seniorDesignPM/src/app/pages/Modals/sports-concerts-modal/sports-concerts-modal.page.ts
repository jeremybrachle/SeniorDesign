import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sports-concerts-modal',
  templateUrl: './sports-concerts-modal.page.html',
  styleUrls: ['./sports-concerts-modal.page.scss'],
})
export class SportsConcertsModalPage implements OnInit {

  // input for the array of sports/concets options
  @Input() sportsConcertsArr;

  constructor(public modalController: ModalController) {
  }

  ngOnInit() {
  }

  // dismiss the modal and return the number of options selected
  dismiss() {
    // return the number of options selected (could be 0)
    this.modalController.dismiss({numSelected: this.getNumSelected()});
  }

  // get the number of sports/concerts options selected
  getNumSelected() {
    let count = 0;
    for (let i = 0; i < this.sportsConcertsArr.length; i ++) {
      if (this.sportsConcertsArr[i].isSelected === true) {
        count++;
      }
    }
    return count;
  }


  // function to add current item to list of selected options
  addSelected(index) {
    // add the item at the index selected
    this.sportsConcertsArr[index].selectOption();
  }

  // function to remove current item from list of selected options
  removeSelected(index) {
    // deselect the item at the index selected
    console.log(this.sportsConcertsArr[index]['isSelected']);
    this.sportsConcertsArr[index].cancelOption();
    console.log(this.sportsConcertsArr[index]['isSelected']);
  }

}
