import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user-model';
import { UserManagementService } from '../../../services/user-management.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


  // my user object
  myUser: User;

  // objects for input that will be bound to the set values in the database
  // page 1
  firstName: string;
  lastName: string;
  phone: number;
  dob: Date;
  address: string;
  city: string;
  state: string;
  zip: number;

  // page 2
  cardType: string;
  cardNumber: number;
  csv: number;
  cardHolder: string;
  expMonth: number;
  expYear: number;

  // page 3
  billingAddress: string;
  billingCity: string;
  billingState: string;
  billingZip: number;

  // page 4
  licNumber: string;
  licExp: string;
  licState: string;
  insuranceCompany: string;
  insuraneExp: string;
  insurancePhone: number;
  insuranceContact: string;
  policy: number;

  constructor(private userManagementService: UserManagementService) {}

  ngOnInit() {
    // get the current logged in user data
    this.myUser = this.userManagementService.getCurrentUser();
    // set all the objects that are bound to this object
    // page 1
    this.firstName = this.myUser.firstName;
    this.lastName = this.myUser.lastName;
    this.phone = this.myUser.phone;
    this.dob = this.myUser.dob;
    this.address = this.myUser.address;
    this.city = this.myUser.city;
    this.state = this.myUser.state;
    this.zip = this.myUser.zip;
    // page 2
    this.cardType = this.myUser.cardType;
    this.cardNumber = this.myUser.cardNumber;
    this.csv = this.myUser.csv;
    this.cardHolder = this.myUser.cardHolder;
    this.expMonth = this.myUser.expMonth;
    this.expYear = this.myUser.expYear;
    // page 3
    this.billingAddress = this.myUser.billingAddress;
    this.billingCity = this.myUser.billingCity;
    this.billingState = this.myUser.billingState;
    this.billingZip = this.myUser.billingZip;

    // page 4
  }


  // confirm the first page of the sliders
  confirmPage1() {
    // make sure no null data
    if (this.firstName == null || this.lastName == null || this.phone == null || this.dob == null || this.address == null || this.city == null || this.state == null || this.zip == null) {
      console.log('null data, reenter 1');
    } else {
      // now that the data is not null, update the object's front end data, then send to the database
      this.myUser.firstName = this.firstName;
      this.myUser.lastName = this.lastName;
      this.myUser.phone = this.phone;
      this.myUser.dob = this.dob;
      this.myUser.address = this.address;
      this.myUser.city = this.city;
      this.myUser.state = this.state;
      this.myUser.zip = this.zip;
      // write the text entries into the database
      this.userManagementService.updatePage1(
        this.firstName, this.lastName, this.phone,
        this.dob, this.address, this.city,
        this.state, this.zip );
    }
  }

  // confirm the second page of the sliders
  confirmPage2() {
    // make sure no null data
    if (this.cardType == null || this.cardNumber == null || this.csv == null || this.cardHolder == null || this.expMonth == null || this.expYear == null) {
      console.log('null data, reenter 2');
    } else {
      // now that the data is not null, update the object's front end data, then send to the database
      this.myUser.cardType = this.cardType;
      this.myUser.cardNumber = this.cardNumber;
      this.myUser.csv = this.csv;
      this.myUser.cardHolder = this.cardHolder;
      this.myUser.expMonth = this.expMonth;
      this.myUser.expYear = this.expYear;
      // write the text entries into the database
      this.userManagementService.updatePage2(
        this.cardType, this.cardNumber, this.csv,
        this.cardHolder, this.expMonth, this.expYear);
    }
  }

// confirm the third page of the sliders
confirmPage3() {
  // make sure no null data
  if (this.billingAddress == null || this.billingCity == null || this.billingState == null || this.billingZip == null) {
    console.log('null data, reenter 3');
  } else {
    // now that the data is not null, update the object's front end data, then send to the database
    this.myUser.billingAddress = this.billingAddress;
    this.myUser.billingCity = this.billingCity;
    this.myUser.billingState = this.billingState;
    this.myUser.billingZip = this.billingZip;
    // write the text entries into the database
    this.userManagementService.updatePage3(
      this.billingAddress, this.billingCity,
      this.billingState, this.billingZip);
  }
}


}
