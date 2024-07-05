import { Injectable } from '@angular/core';
import { ImageService } from './image.service';
import { TableType } from '../enum/table-types.enum';

interface Player {
  name: string;
  image: string;
}

interface Table {
  players: Player[];
  type?: TableType;
}

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private players: Player[] = [];
  private tables: Table[] = [];
  private tableOptions: TableType[] = [];

  constructor(private imageService: ImageService) {}

  addPlayer(name: string) {
    if (name) {
      const image = this.imageService.getRandomImage();
      this.players.push({ name, image });
    }
  }

  getPlayers(): Player[] {
    return this.players;
  }

  divideIntoTables(): { tables: Table[]; tableOptions: TableType[] } {
    const playerCount = this.players.length;
    this.tables = [];
    this.tableOptions = [];

    if (playerCount < 3) {
      alert('Not enough players to form a table.');
      return { tables: [], tableOptions: [] };
    }

    switch (playerCount) {
      case 3:
      case 4:
        this.tables.push({ players: this.players, type: TableType.Standard });
        break;
      case 5:
        this.tableOptions.push(TableType.AllVsAll, TableType.Diamond);
        break;
      case 6:
        this.tableOptions.push(
          TableType.Standard,
          TableType.EmperorTeam1,
          TableType.EmperorTeam2
        );
        break;
      case 7:
        this.tables.push(
          { players: this.players.slice(0, 4), type: TableType.Standard },
          { players: this.players.slice(4, 7), type: TableType.Standard }
        );
        break;
      default:
        for (let i = 0; i < playerCount; i += 4) {
          this.tables.push({
            players: this.players.slice(i, i + 4),
            type: TableType.Standard,
          });
        }
        break;
    }

    return { tables: this.tables, tableOptions: this.tableOptions };
  }

  setTableOption(option: TableType) {
    this.tables = [];
    const playerCount = this.players.length;

    switch (option) {
      case TableType.AllVsAll:
        if (playerCount === 5) {
          this.tables.push({ players: this.players, type: TableType.AllVsAll });
        }
        break;
      case TableType.Diamond:
        if (playerCount === 5) {
          const diamondTable = [
            [this.players[0], this.players[1], this.players[2]],
            [this.players[0], this.players[3], this.players[4]],
            [this.players[1], this.players[2], this.players[3]],
            [this.players[2], this.players[3], this.players[4]],
            [this.players[3], this.players[4], this.players[0]],
          ];
          diamondTable.forEach((table) =>
            this.tables.push({ players: table, type: TableType.Diamond })
          );
        }
        break;
      case TableType.Standard:
        if (playerCount === 6) {
          const table1 = this.players.slice(0, 3);
          const table2 = this.players.slice(3, 6);
          this.tables.push(
            { players: table1, type: TableType.Standard },
            { players: table2, type: TableType.Standard }
          );
        }
        break;
      case TableType.EmperorTeam1:
      case TableType.EmperorTeam2:
        if (playerCount === 6) {
          const team1 = [this.players[0], this.players[1], this.players[2]];
          const team2 = [this.players[3], this.players[4], this.players[5]];
          this.tables.push(
            { players: team1, type: TableType.EmperorTeam1 },
            { players: team2, type: TableType.EmperorTeam2 }
          );
        }
        break;
    }
  }

  getTables(): Table[] {
    return this.tables;
  }
}
