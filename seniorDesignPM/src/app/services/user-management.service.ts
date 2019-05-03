import { Injectable } from '@angular/core';
import { User } from '../models/user-model';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserManagementService {

  // array of user objects
  // remove once we have access to database from API
  allUsers = new Array;

  // currently set user
  currUser: User;

  // currently set user id
  currUserID: number;

  constructor(private http: HttpClient) { }

  // add a user to the database (email is username)
  async registerUser(username, password) {

    // call the API and insert the username and password if the username doesn't
    // already exist. if so, then return false to signify that the record was not added

    // call the API and confirm that there is not a record with this username
    // if unique, then make a new account with the entered username/password

    // set the return variable, y, which is set to be the inner return variable, x, by convention of the async function return values
    let y = await this.http.post('http://localhost:5000/register', {'username': username, 'password': password}, {responseType: 'text'}
    ).toPromise().then(
      data => {
        console.log('connection established to registration api');
        // now check the response and see if 1 or 0
        // if 1, then this is a new username and it is thus accepted/created
        if (data === '1') {
          // return the value (1 means the account can be created. x will return to y which is returned to the calling function)
          // let x = 1;
          return 1;
        // if 0, then the username already exists, so cannot accept this entry
        } else if (data === '0') {
          // console.log('entry already exists');
          // let x = 0;
          return 0;
        }
      }, error => {
        console.log('connection failed to registration API');
        console.error(error);
        // let x = 0;
        return 0;
      }
    );
    // return the value from the async function to the API
    return y;
  }

  // set the user from the api query
  setCurrentUser(response) {
    // parse the response and make a user object
    let loggedIn = new User(
      response[1],
      response[2],
      response[3],
      response[4],
      response[5],
      response[6],
      response[7],
      response[8],
      response[9],
      response[10],
      response[11],
      response[12],
      response[13],
      response[14],
      response[15],
      response[16],
      response[17],
      response[18],
      response[19],
      response[20],
      response[21],
      response[22],
      response[23],
      response[24],
      response[25],
      response[26],
      response[27],
      response[28]
    );
    // assign the curr user object to this user
    this.currUser = loggedIn;
    // set the current user ID which will map to the order history
    this.currUserID = response[0];
  }

  // get the currently set user object
  getCurrentUser() {
    return this.currUser;
  }

  // return the id of the current user
  getCurrUserID() {
    return this.currUserID;
  }

  // four functions for setting user attributes
  // each function will PUT to the database and update the entries

  // first slide of updates
  async updatePage1(firstName, lastName, phone, dob, address, city, state, zip) {
    console.log('calling api for updating records of first slide');
    // get the user id
    let uid = this.getCurrUserID();
    // call the api endpoint
    await this.http.put('http://localhost:5000/updatePage1', {'uid': uid, 'firstName': firstName, 'lastName' : lastName, 'phone' : phone, 'dob' : dob, 'address' : address, 'city' : city, 'state' : state, 'zip' : zip}, {responseType: 'text'}
    ).toPromise().then(
      data => {
        console.log('connection established to update page 1 API');
        console.log(data);
      }, error => {
        console.log('connection failed to update page 1 API');
        console.error(error);
      }
    );
  }

  // second slide of updates
  async updatePage2(cardType, cardNumber, csv, cardHolder, expMonth, expYear) {
    console.log('calling api for updating records of second slide');
    // get the user id
    let uid = this.getCurrUserID();
    // call the api endpoint
    await this.http.put('http://localhost:5000/updatePage2', {'uid': uid, 'cardType': cardType, 'cardNumber' : cardNumber, 'csv' : csv, 'cardHolder' : cardHolder, 'expMonth' : expMonth, 'expYear' : expYear}, {responseType: 'text'}
    ).toPromise().then(
      data => {
        console.log('connection established to update page 2 API');
        console.log(data);
      }, error => {
        console.log('connection failed to update page 2 API');
        console.error(error);
      }
    );
  }

// second slide of updates
async updatePage3(billingAddress, billingCity, billingState, billingZip) {
  console.log('calling api for updating records of third slide');
  // get the user id
  let uid = this.getCurrUserID();
  // call the api endpoint
  await this.http.put('http://localhost:5000/updatePage3', {'uid': uid, 'billingAddress': billingAddress, 'billingCity' : billingCity, 'billingState' : billingState, 'billingZip' : billingZip}, {responseType: 'text'}
  ).toPromise().then(
    data => {
      console.log('connection established to update page 3 API');
      console.log(data);
    }, error => {
      console.log('connection failed to update page 3 API');
      console.error(error);
    }
  );
}


}
