import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];
