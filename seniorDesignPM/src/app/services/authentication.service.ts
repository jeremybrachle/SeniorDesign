import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
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
    // see if the username exists in the database
    let userExists: Boolean = false;
    // if the user does exist, see if the hash matches
    let passwordMatch: Boolean = false;

    let hash: any = '21232f297a57a5a743894a0e4a801fc3';

    if (username === 'admin' && password === hash) {
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
