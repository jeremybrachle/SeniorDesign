import { Injectable } from '@angular/core';
import { User } from '../models/user-model';

@Injectable()
export class UserManagementService {

  // array of user objects
  allUsers = new Array;

  constructor() { }

  // get the users from the database
  getUsersFromDB() {
    this.registerUser('admin', '21232f297a57a5a743894a0e4a801fc3');
    this.registerUser('root', '63a9f0ea7bb98050796b649e85481845');
  }

  // return the array of users
  getUserArray() {
    return this.allUsers;
  }

  // add a user to the database
  registerUser(username, password) {
    let newUser = new User(
      username,
      password,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
      );
    this.allUsers.push(newUser);
  }
}
