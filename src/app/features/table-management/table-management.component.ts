import { Component } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { TableType } from '../../enum/table-types.enum';

@Component({
  selector: 'app-table-management',
  templateUrl: './table-management.component.html',
  styleUrls: ['./table-management.component.css'],
})
export class TableManagementComponent {
  roles: Array<'leftTower' | 'rightTower' | 'emperor'> = [
    'leftTower',
    'rightTower',
    'emperor',
  ];

  constructor(private playerService: PlayerService) {}

  setTableOption(option: TableType) {
    this.playerService.resetDice();
    this.playerService.setTableOption(option);
  }

  rollDiceForTable(table: any) {
    this.playerService.rollDiceForTable(table);
  }

  divideIntoTables() {
    this.playerService.resetDice();
    this.playerService.divideIntoTables();
  }

  backToRegistration() {
    this.playerService.resetDice();
  }

  get tables() {
    return this.playerService.getTables();
  }

  get tableOptions() {
    return this.playerService.getTableOptions();
  }
}
