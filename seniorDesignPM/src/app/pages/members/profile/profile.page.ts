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
  firstName: string;
  lastName: string;
  phone: number;
  dob: Date;
  address: string;
  city: string;
  state: string;
  zip: number;
  cardType: string;
  cardNumber: number;
  csv: number;
  cardHolder: string;
  expMonth: string;
  expYear: number;
  billingAddress: string;
  billingCity: string;
  billingState: string;
  billingZip: number;
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
    this.firstName = this.myUser.firstName;
    this.lastName = this.myUser.lastName;
  }


  // confirm the first page of the sliders
  confirmPage1() {
    // write the text entries into the database
    console.log(this.firstName);
  }

}
