import { Component, EventEmitter, Output } from '@angular/core';
import { Orientation } from '../../../enum/orientation.enum';

@Component({
  selector: 'app-settings-score',
  templateUrl: './settings-score.component.html',
  styleUrls: ['./settings-score.component.css'],
})
export class SettingsScoreComponent {
  numberOfPlayers: number = 4;
  points: number = 40;
  orientation: Orientation = Orientation.DEFAULT;
  OrientationEnum = Orientation; // Definiamo un alias per l'enum

  pointsOptions = [20, 25, 30, 40, 50, 60];
  playerOptions = [1, 2, 3, 4, 5, 6];

  @Output() settingsSubmitted = new EventEmitter<{
    numberOfPlayers: number;
    points: number;
    orientation: Orientation;
  }>();

  startScoreTracking() {
    this.settingsSubmitted.emit({
      numberOfPlayers: this.numberOfPlayers,
      points: this.points,
      orientation: this.orientation,
    });
  }
}
