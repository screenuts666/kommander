import { Injectable } from '@angular/core';
import { ImageService } from './image.service';
import { TableType } from '../enum/table-types.enum';

interface Player {
  name: string;
  image: string;
  seatNumber?: number;
  roll?: number;
}

interface Table {
  players: Player[];
  type?: TableType;
  rolled?: boolean;
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
      case 5:
      case 7:
        this.tables.push({
          players: this.assignSeats(this.players),
          type: TableType.Diamond,
        });
        break;
      case 3:
      case 4:
        this.tables.push({
          players: this.assignSeats(this.players),
          type: TableType.Standard,
        });
        break;
      case 6:
        this.tableOptions.push(
          TableType.Standard,
          TableType.EmperorTeam1,
          TableType.EmperorTeam2
        );
        break;
      default:
        for (let i = 0; i < playerCount; i += 4) {
          const tablePlayers = this.players.slice(i, i + 4);
          if (tablePlayers.length > 1) {
            this.tables.push({
              players: this.assignSeats(tablePlayers),
              type: TableType.Standard,
            });
          } else if (this.tables.length > 0) {
            this.tables[this.tables.length - 1].players.push(...tablePlayers);
          }
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
          this.tables.push({
            players: this.assignSeats(this.players),
            type: TableType.AllVsAll,
          });
        }
        break;
      case TableType.Diamond:
        if (playerCount === 5 || playerCount === 7) {
          this.tables.push({
            players: this.assignSeats(this.players),
            type: TableType.Diamond,
          });
        }
        break;
      case TableType.Standard:
        if (playerCount === 6) {
          const table1 = this.players.slice(0, 3);
          const table2 = this.players.slice(3, 6);
          this.tables.push(
            { players: this.assignSeats(table1), type: TableType.Standard },
            { players: this.assignSeats(table2), type: TableType.Standard }
          );
        }
        break;
      case TableType.EmperorTeam1:
      case TableType.EmperorTeam2:
        if (playerCount === 6) {
          const team1 = this.players.slice(0, 3);
          const team2 = this.players.slice(3, 6);
          this.tables.push(
            { players: this.assignSeats(team1), type: TableType.EmperorTeam1 },
            { players: this.assignSeats(team2), type: TableType.EmperorTeam2 }
          );
        }
        break;
    }
  }

  assignSeats(players: Player[]): Player[] {
    return players
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((player, index) => {
        player.seatNumber = index + 1;
        return player;
      });
  }

  rollDiceForTable(table: Table) {
    if (!table.rolled) {
      table.players.forEach((player) => {
        player.roll = Math.floor(Math.random() * 20) + 1;
      });
      table.rolled = true;
    }
  }

  getTables(): Table[] {
    return this.tables;
  }

  deletePlayer(index: number) {
    this.players.splice(index, 1);
  }
}
