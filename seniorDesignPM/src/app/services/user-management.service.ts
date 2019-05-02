import { Injectable } from '@angular/core';
import { User } from '../models/user-model';
import { Md5 } from 'ts-md5/dist/md5';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserManagementService {

  // array of user objects
  // remove once we have access to database from API
  allUsers = new Array;

  // currently set user
  currUser: User;

  // connection boolean for api
  connected: Boolean = false;

  constructor(private http: HttpClient) { }

  // add a user to the database (email is username)
  async registerUser(username, password) {

    // call the API and insert the username and password if the username doesn't
    // already exist. if so, then return false to signify that the record was not added

    // call the API and confirm that there is not a record with this username
    // otherwise make a new account with the username/password

    // set the return variable, y
    let y = await this.http.post('http://localhost:5000/register', {'username': username, 'password': password}, {responseType: 'text'}
    ).toPromise().then(
      data => {
        console.log('connection established to registration api');
        // now check the response and see if 1 or 0
        // if 1, then this is a new username and it is thus accepted/created
        if (data === '1') {
          // console.log('username and password combo accepted');

          // return the value
          let x = 1;
          return x;
        // if 0, then the username already exists, so cannot accept this entry
        } else if (data === '0') {
          // console.log('entry already exists');
          let x = 0;
          return x;
        }
      }, error => {
        console.log('connection failed to registration API');
        console.error(error);
        let x = 0;
        return x;
      }
    );
    // return the value from the async function to the API
    return y;

    // let newUser = new User(
    //   username,
    //   password,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null,
    //   null
    //   );

    // post to database
    // this.allUsers.push(newUser);
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
  }

  // get the currently set user object
  getCurrentUser() {
    return this.currUser;
  }

  // four functions for setting user attributes
  // each function will PUT to the database and update the entries

}
