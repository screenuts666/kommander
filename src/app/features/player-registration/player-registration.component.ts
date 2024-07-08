import { Component, ViewChild, ElementRef } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css'],
})
export class PlayerRegistrationComponent {
  playerName: string = '';
  showTables: boolean = false;

  @ViewChild('playerNameInput') playerNameInput!: ElementRef;

  constructor(private playerService: PlayerService) {}

  // TODO remove
  getPlayerMock(): void {
    const mockPlayerList = [
      'Jack',
      'Pernice',
      'Cosma',
      'Giuseppe',
      'Thomas',
      'Jacopo',
    ];
    mockPlayerList.map((ele) => this.playerService.addPlayer(ele));
  }

  registerPlayer() {
    if (this.playerName.trim()) {
      this.playerService.addPlayer(this.playerName);
      this.playerName = '';
      this.focusPlayerNameInput();
    }
  }

  focusPlayerNameInput() {
    this.playerNameInput.nativeElement.focus();
  }

  divideIntoTables() {
    this.playerService.divideIntoTables();
    this.playerService.resetDice();
    this.showTables = true;
  }

  deletePlayer(index: number) {
    this.playerService.deletePlayer(index);
  }

  get players() {
    return this.playerService.getPlayers();
  }

  get playerCount() {
    return this.players.length;
  }

  backToRegistration() {
    this.playerService.resetDice();
    this.showTables = false;
  }
}
