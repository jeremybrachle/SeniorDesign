import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: '../app/pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: '../app/pages/login/login.module#LoginPageModule' },
  { path: 'booking', loadChildren: '../app/pages/booking/booking.module#BookingPageModule' },
  { path: 'create-account', loadChildren: '../app/pages/create-account/create-account.module#CreateAccountPageModule' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
