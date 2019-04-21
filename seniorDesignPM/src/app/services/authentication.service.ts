import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { UserManagementService } from './user-management.service';
import { Md5 } from 'ts-md5/dist/md5';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(
      private storage: Storage,
      private plt: Platform,
      private userManagementService: UserManagementService
      ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
    // set the authenticated state as false immediately
    this.authenticationState.next(false);
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

  login(username, password) {
    // perform the logic of checking the username and password combination here:
    let userExists: Boolean = false;
    let passwordMatch: Boolean = false;

    // see if the username exists in the database, then check password hash
    let allUsers = new Array;
    allUsers = this.userManagementService.getUserArray();
    for (let i = 0; i < allUsers.length; i ++) {
      if (username === allUsers[i]['username']) {
        // the user exists
        userExists = true;
        // now check the password hash
        let hash = Md5.hashStr(password);
        if (hash === allUsers[i]['password']) {
          passwordMatch = true;
        }
      }
    }

    // if both booleans check out, then access is granted
    if (userExists && passwordMatch) {
      // set the token and the auth state
      return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
        this.authenticationState.next(true);
      });
    }

  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

}
