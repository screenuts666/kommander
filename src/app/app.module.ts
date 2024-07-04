import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerRegistrationComponent } from './features/player-registration/player-registration.component';
import { FormsModule } from '@angular/forms';
import { TableManagementComponent } from './features/table-management/table-management.component';
import { ScoreTrackingComponent } from './features/score-tracking/score-tracking.component';
import { MatchHistoryComponent } from './features/match-history/match-history.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerRegistrationComponent,
    TableManagementComponent,
    ScoreTrackingComponent,
    MatchHistoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
