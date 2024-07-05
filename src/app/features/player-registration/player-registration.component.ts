import { Component } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { TableType } from '../../enum/table-types.enum';

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css'],
})
export class PlayerRegistrationComponent {
  playerName: string = '';
  tables: any[] = [];
  tableOptions: TableType[] = [];

  constructor(private playerService: PlayerService) {}

  registerPlayer() {
    this.playerService.addPlayer(this.playerName);
    this.playerName = '';
  }

  divideIntoTables() {
    const result = this.playerService.divideIntoTables();
    this.tables = result.tables;
    this.tableOptions = result.tableOptions;
  }

  setTableOption(option: TableType) {
    this.playerService.setTableOption(option);
    this.tables = this.playerService.getTables();
  }

  get players() {
    return this.playerService.getPlayers();
  }

  get playerCount() {
    return this.players.length;
  }
}
