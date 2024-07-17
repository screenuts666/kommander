import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerRegistrationComponent } from './features/player-registration/player-registration.component';
import { FormsModule } from '@angular/forms';
import { TableManagementComponent } from './features/table-management/table-management.component';
import { ScoreTrackingComponent } from './features/score-tracking/score-tracking.component';
import { CardComponent } from './shared/card/card.component';
import { SettingsScoreComponent } from './features/score-tracking/settings-score/settings-score.component';
import { FullscreenScoreComponent } from './features/score-tracking/fullscreen-score/fullscreen-score.component';
import { QuadrantScoreComponent } from './features/score-tracking/fullscreen-score/quadrant-score/quadrant-score.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerRegistrationComponent,
    TableManagementComponent,
    ScoreTrackingComponent,
    CardComponent,
    SettingsScoreComponent,
    FullscreenScoreComponent,
    QuadrantScoreComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
