import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { UserManagementService } from './user-management.service';
import { Md5 } from 'ts-md5/dist/md5';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(
      private storage: Storage,
      private plt: Platform,
      private userManagementService: UserManagementService,
      private http: HttpClient
      ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
    // set the authenticated state as false immediately
    this.authenticationState.next(false);
  }

  // return true or false for authentication
  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

  // call the API and send in the typed username and hashed password
  async login(username, password) {
    // perform the logic of checking the username and password combination here:

    // hash the password
    let hash = Md5.hashStr(password);

    // call the API and confirm that there is a record with the user/password hash
    await this.http.post('http://localhost:5000/login', {'username': username, 'password': hash}, {responseType: 'text'}
    ).toPromise().then(
      data => {
        console.log('connection established to user api');
        // now check the response and see if 1 or 0
        if (data === '1') {
          console.log('correct username and password');
          // set the current user
          this.setUser(username, hash);
          // return the token for authentication
          return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
            this.authenticationState.next(true);
          });
        } else if (data === '0') {
          console.log('incorrect username and password combo');
        }
      }, error => {
        console.log('connection failed to user API');
        console.error(error);
      }
    );

  }


  // call the api and set the currently logged in user
  async setUser(u, p) {
    // call api and get the user with this username / password combo
    await this.http.post('http://localhost:5000/setUser', {'username': u, 'password': p}, {responseType: 'json'}
    ).toPromise().then(
      data => {
        console.log('setting the logged in user');
        // set the user from the response of the query that holds the user's attributes
        this.userManagementService.setCurrentUser(data);
      }, error => {
        console.log('connection failed for setting user');
        console.error(error);
      }
    );
  }

  // logout, remove the auth token
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  // return auth state
  isAuthenticated() {
    return this.authenticationState.value;
  }

}
