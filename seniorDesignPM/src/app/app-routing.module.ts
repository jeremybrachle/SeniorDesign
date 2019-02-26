import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: '../app/pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: '../app/pages/login/login.module#LoginPageModule' },
  { path: 'booking', loadChildren: '../app/pages/booking/booking.module#BookingPageModule' },
  { path: 'create-account', loadChildren: '../app/pages/create-account/create-account.module#CreateAccountPageModule' },
  { path: 'booking-info-modal', loadChildren: './pages/Modals/booking-info-modal/booking-info-modal.module#BookingInfoModalPageModule' },
  { path: 'book-now-modal', loadChildren: './pages/Modals/book-now-modal/book-now-modal.module#BookNowModalPageModule' },  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
