import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadChildren: '../members/home/home.module#HomePageModule' },
  { path: 'booking', loadChildren: '../members/booking/booking.module#BookingPageModule' },
  { path: 'booking-info-modal', loadChildren: '../members/Modals/booking-info-modal/booking-info-modal.module#BookingInfoModalPageModule' },
  { path: 'book-now-modal', loadChildren: '../members/Modals/book-now-modal/book-now-modal.module#BookNowModalPageModule' },
  { path: 'entertainment', loadChildren: '../members/entertainment/entertainment.module#EntertainmentPageModule' },
  { path: 'profile', loadChildren: '../members/profile/profile.module#ProfilePageModule' },
  { path: 'dining-modal', loadChildren: '../members/Modals/dining-modal/dining-modal.module#DiningModalPageModule' },
  { path: 'sports-concerts-modal', loadChildren: '../members/Modals/sports-concerts-modal/sports-concerts-modal.module#SportsConcertsModalPageModule' },
  { path: 'experiences-modal', loadChildren: '../members/Modals/experiences-modal/experiences-modal.module#ExperiencesModalPageModule' },
  { path: 'confirm-cancel', loadChildren: '../members/Modals/confirm-cancel/confirm-cancel.module#ConfirmCancelPageModule' },
  { path: 'car-info-modal', loadChildren: '../members/Modals/car-info-modal/car-info-modal.module#CarInfoModalPageModule' },
  { path: 'confirmation', loadChildren: '../members/confirmation/confirmation.module#ConfirmationPageModule' },
  { path: 'accommodations-modal', loadChildren: '../members/Modals/accommodations-modal/accommodations-modal.module#AccommodationsModalPageModule' },
  { path: 'history', loadChildren: '../members/history/history.module#HistoryPageModule' },
  { path: 'history-item-modal', loadChildren: './Modals/history-item-modal/history-item-modal.module#HistoryItemModalPageModule' }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }