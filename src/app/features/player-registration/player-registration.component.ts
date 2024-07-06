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
  showTables: boolean = false;

  constructor(private playerService: PlayerService) {}

  registerPlayer() {
    if (this.playerName.trim()) {
      this.playerService.addPlayer(this.playerName);
      this.playerName = '';
    }
  }

  divideIntoTables() {
    const result = this.playerService.divideIntoTables();
    this.tables = result.tables;
    this.tableOptions = result.tableOptions;
    this.showTables = true;
  }

  setTableOption(option: TableType) {
    this.playerService.setTableOption(option);
    this.tables = this.playerService.getTables();
  }

  deletePlayer(index: number) {
    this.playerService.deletePlayer(index);
  }

  rollDiceForTable(table: any) {
    this.playerService.rollDiceForTable(table);
  }

  get players() {
    return this.playerService.getPlayers();
  }

  get playerCount() {
    return this.players.length;
  }
}
