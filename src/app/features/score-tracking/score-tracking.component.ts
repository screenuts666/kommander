import { Component } from '@angular/core';
import { Orientation } from '../../enum/orientation.enum';

@Component({
  selector: 'app-score-tracking',
  templateUrl: './score-tracking.component.html',
  styleUrls: ['./score-tracking.component.css'],
})
export class ScoreTrackingComponent {
  isTracking: boolean = false;
  settings!: {
    numberOfPlayers: number;
    points: number;
    orientation: Orientation;
  };

  onSettingsSubmitted(settings: {
    numberOfPlayers: number;
    points: number;
    orientation: Orientation;
  }) {
    this.settings = settings;
    this.isTracking = true;
  }

  onExitFullScreen() {
    this.isTracking = false;
  }
}
