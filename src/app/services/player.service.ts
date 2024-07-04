import { Injectable } from '@angular/core';

interface Player {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private players: Player[] = [];
  private nextId: number = 1;

  constructor() {}

  addPlayer(name: string): Player {
    const newPlayer: Player = { id: this.nextId++, name };
    this.players.push(newPlayer);
    return newPlayer;
  }

  getPlayers(): Player[] {
    return this.players;
  }

  deletePlayer(id: number): void {
    this.players = this.players.filter((player) => player.id !== id);
  }

  shufflePlayers(): Player[] {
    for (let i = this.players.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.players[i], this.players[j]] = [this.players[j], this.players[i]];
    }
    return this.players;
  }

  dividePlayersIntoTables(): Player[][] {
    this.shufflePlayers();
    const tables: Player[][] = [];
    const tableSize = 4;
    let table: Player[] = [];

    for (const player of this.players) {
      table.push(player);
      if (table.length === tableSize) {
        tables.push(table);
        table = [];
      }
    }

    // Se rimangono meno di 4 giocatori, ridistribuiscili
    if (table.length > 0 && tables.length > 0) {
      for (let i = 0; i < table.length; i++) {
        tables[i % tables.length].push(table[i]);
      }
    } else if (table.length > 0) {
      tables.push(table);
    }

    return tables;
  }
}
