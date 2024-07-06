import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerRegistrationComponent } from './features/player-registration/player-registration.component';

const routes: Routes = [
  { path: 'player-registration', component: PlayerRegistrationComponent },
  { path: '', redirectTo: '/player-registration', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
