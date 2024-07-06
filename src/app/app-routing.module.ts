import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerRegistrationComponent } from './features/player-registration/player-registration.component';
import { ScoreTrackingComponent } from './features/score-tracking/score-tracking.component';

const routes: Routes = [
  { path: 'player-registration', component: PlayerRegistrationComponent },
  { path: 'score-tracking', component: ScoreTrackingComponent },
  { path: '', redirectTo: '/score-tracking', pathMatch: 'full' },
  // { path: '', redirectTo: '/player-registration', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
