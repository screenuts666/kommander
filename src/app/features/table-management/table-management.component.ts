import { Component } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { TableType } from '../../enum/table-types.enum';

@Component({
  selector: 'app-table-management',
  templateUrl: './table-management.component.html',
  styleUrls: ['./table-management.component.css'],
})
export class TableManagementComponent {
  constructor(private playerService: PlayerService) {}
  setTableOption(option: TableType) {
    this.playerService.setTableOption(option);
  }

  rollDiceForTable(table: any) {
    this.playerService.rollDiceForTable(table);
  }

  get tables() {
    return this.playerService.getTables();
  }

  get tableOptions() {
    return this.playerService.getTableOptions();
  }
}
