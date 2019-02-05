import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: '../app/pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: '../app/pages/login/login.module#LoginPageModule' },
  { path: 'booking', loadChildren: '../app/pages/booking/booking.module#BookingPageModule' },
  { path: 'profile', loadChildren: '../app/pages/profile/profile.module#ProfilePageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
