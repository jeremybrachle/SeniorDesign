import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';

import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { UserManagementService } from './services/user-management.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController,
    private authenticationService: AuthenticationService,
    private router: Router,
    private userManagementService: UserManagementService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // call the database and get the user data
      this.userManagementService.getUsersFromDB();


      this.authenticationService.authenticationState.subscribe(state => {
        if (state) {
          this.router.navigate(['members', 'home']);
        } else {
          this.router.navigate(['login']);
        }
      });


    });
  }

  closeSideMenu() {
    this.menuCtrl.close();
  }

  closeAndLogOut() {
    this.menuCtrl.close();
    this.authenticationService.logout();
  }

}
