import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerRegistrationComponent } from './features/player-registration/player-registration.component';
import { TableManagementComponent } from './features/table-management/table-management.component';
import { ScoreTrackingComponent } from './features/score-tracking/score-tracking.component';
import { MatchHistoryComponent } from './features/match-history/match-history.component';

const routes: Routes = [
  { path: 'player-registration', component: PlayerRegistrationComponent },
  { path: 'table-management', component: TableManagementComponent },
  { path: 'score-tracking', component: ScoreTrackingComponent },
  { path: 'match-history', component: MatchHistoryComponent },
  { path: '', redirectTo: '/player-registration', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
