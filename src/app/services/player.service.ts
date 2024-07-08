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
  maxRoll?: number | null;
  teams?: { leftTower: Player[]; emperor: Player[]; rightTower: Player[] };
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
          players: this.assignSeats(this.shuffleArray([...this.players])),
          type: TableType.Diamond,
        });
        break;
      case 3:
      case 4:
        this.tables.push({
          players: this.assignSeats(this.shuffleArray([...this.players])),
          type: TableType.Standard,
        });
        break;
      case 6:
        this.tableOptions.push(TableType.Standard, TableType.Emperor);
        break;
      default:
        for (let i = 0; i < playerCount; i += 4) {
          const tablePlayers = this.shuffleArray([...this.players]).slice(
            i,
            i + 4
          );
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
    this.resetDice();
    this.tables = [];
    const playerCount = this.players.length;
    const shuffledPlayers = this.shuffleArray([...this.players]);

    switch (option) {
      case TableType.AllVsAll:
        if (playerCount === 5) {
          this.tables.push({
            players: this.assignSeats(shuffledPlayers),
            type: TableType.AllVsAll,
          });
        }
        break;
      case TableType.Diamond:
        if (playerCount === 5 || playerCount === 7) {
          this.tables.push({
            players: this.assignSeats(shuffledPlayers),
            type: TableType.Diamond,
          });
        }
        break;
      case TableType.Standard:
        if (playerCount === 6) {
          const table1 = shuffledPlayers.slice(0, 3);
          const table2 = shuffledPlayers.slice(3, 6);
          this.tables.push(
            { players: this.assignSeats(table1), type: TableType.Standard },
            { players: this.assignSeats(table2), type: TableType.Standard }
          );
        }
        break;
      case TableType.Emperor:
        if (playerCount === 6) {
          const teams = {
            leftTower: [shuffledPlayers[0], shuffledPlayers[3]],
            emperor: [shuffledPlayers[1], shuffledPlayers[4]],
            rightTower: [shuffledPlayers[2], shuffledPlayers[5]],
          };
          this.tables.push({
            players: shuffledPlayers,
            type: TableType.Emperor,
            teams,
          });
        }
        break;
    }
  }

  assignSeats(players: Player[]): Player[] {
    return players.map((player, index) => {
      player.seatNumber = index + 1;
      return player;
    });
  }

  rollDiceForTable(table: Table) {
    table.players.forEach((player) => {
      player.roll = Math.floor(Math.random() * 20) + 1;
    });

    // Determina il massimo valore dei dadi per il tavolo
    table.maxRoll = Math.max(
      ...table.players.map((player) => player.roll || 0)
    );
  }

  resetDice() {
    this.players.forEach((player) => {
      player.roll = undefined;
    });

    this.tables.forEach((table) => {
      table.players.forEach((player) => {
        player.roll = undefined;
      });
      table.maxRoll = undefined;
    });
  }

  getTables(): Table[] {
    return this.tables;
  }

  getTableOptions(): TableType[] {
    return this.tableOptions;
  }

  deletePlayer(index: number) {
    this.players.splice(index, 1);
  }

  // Funzione per generare un seed casuale
  private generateRandomSeed(): number {
    return Math.floor(Math.random() * 1000000);
  }

  shuffleArray(array: any[]): any[] {
    let seed = this.generateRandomSeed();

    function random() {
      var x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
