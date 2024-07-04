import { Component } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css'],
})
export class PlayerRegistrationComponent {
  playerName: string = '';
  players = this.playerService.getPlayers();
  tables: any[] = [];

  constructor(private playerService: PlayerService) {}

  registerPlayer() {
    if (this.playerName.trim()) {
      const newPlayer = this.playerService.addPlayer(this.playerName.trim());
      console.log('Player registered', newPlayer);
      this.playerName = '';
    }
  }

  divideIntoTables() {
    this.tables = this.playerService.dividePlayersIntoTables();
    console.log('Players divided into tables', this.tables);
  }
}
