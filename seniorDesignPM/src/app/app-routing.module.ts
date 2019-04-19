import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', loadChildren: '../app/pages/public/login/login.module#LoginPageModule' },
  { path: 'create-account', loadChildren: '../app/pages/public/create-account/create-account.module#CreateAccountPageModule' },

  {
    path: 'members',
    canActivate: [AuthGuard],
    loadChildren: '../app/pages/members/member-routing.module#MemberRoutingModule'
  },

  // { path: 'home', loadChildren: '../app/pages/home/home.module#HomePageModule' },
  // { path: 'booking', loadChildren: '../app/pages/booking/booking.module#BookingPageModule' },
  // { path: 'booking-info-modal', loadChildren: './pages/Modals/booking-info-modal/booking-info-modal.module#BookingInfoModalPageModule' },
  // { path: 'book-now-modal', loadChildren: './pages/Modals/book-now-modal/book-now-modal.module#BookNowModalPageModule' },
  // { path: 'entertainment', loadChildren: './pages/entertainment/entertainment.module#EntertainmentPageModule' },
  // { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  // { path: 'dining-modal', loadChildren: './pages/Modals/dining-modal/dining-modal.module#DiningModalPageModule' },
  // { path: 'sports-concerts-modal', loadChildren: './pages/Modals/sports-concerts-modal/sports-concerts-modal.module#SportsConcertsModalPageModule' },
  // { path: 'experiences-modal', loadChildren: './pages/Modals/experiences-modal/experiences-modal.module#ExperiencesModalPageModule' },
  // { path: 'confirm-cancel', loadChildren: './pages/Modals/confirm-cancel/confirm-cancel.module#ConfirmCancelPageModule' },
  // { path: 'car-info-modal', loadChildren: './pages/Modals/car-info-modal/car-info-modal.module#CarInfoModalPageModule' },
  // { path: 'confirmation', loadChildren: './pages/confirmation/confirmation.module#ConfirmationPageModule' },
  // { path: 'accommodations-modal', loadChildren: './pages/Modals/accommodations-modal/accommodations-modal.module#AccommodationsModalPageModule' },
  // { path: 'history', loadChildren: './pages/history/history.module#HistoryPageModule' }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
