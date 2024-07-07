import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { ImageService } from '../../../services/image.service';
import { Orientation } from '../../../enum/orientation.enum';

@Component({
  selector: 'app-fullscreen-score',
  templateUrl: './fullscreen-score.component.html',
  styleUrls: ['./fullscreen-score.component.css'],
})
export class FullscreenScoreComponent {
  @Input() numberOfPlayers!: number;
  @Input() points!: number;
  @Input() orientation!: Orientation;
  @Output() exitFullScreen = new EventEmitter<void>();

  OrientationEnum = Orientation;

  players: { points: number; icon: string; color: string }[] = [];
  playerColors: string[] = [
    '#4834d4', // Blue
    '#be2edd', // Purple
    '#22a6b3', // Cyan
    '#f0932b', // Orange
    '#6ab04c', // Green
    '#130f40', // Dark Blue
  ];

  constructor(
    @Inject(DOCUMENT) private documentService: any,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.players = Array.from({ length: this.numberOfPlayers }, (_, index) => ({
      points: this.points,
      icon: this.imageService.getRandomImage(),
      color: this.playerColors[index % this.playerColors.length],
    }));
    this.fullScreen();
  }

  private fullScreen() {
    const elem = this.documentService.documentElement;
    const methodToBeInvoked =
      elem.requestFullscreen ||
      elem.webkitRequestFullScreen ||
      elem['mozRequestFullScreen'] ||
      elem['msRequestFullscreen'];
    if (methodToBeInvoked) methodToBeInvoked.call(elem);
  }

  leaveFullScreen() {
    if (this.documentService.exitFullscreen) {
      this.documentService.exitFullscreen();
    } else if (this.documentService.mozCancelFullScreen) {
      /* Firefox */
      this.documentService.mozCancelFullScreen();
    } else if (this.documentService.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.documentService.webkitExitFullscreen();
    } else if (this.documentService.msExitFullscreen) {
      /* IE/Edge */
      this.documentService.msExitFullscreen();
    }
    this.exitFullScreen.emit();
  }

  increasePoints(index: number) {
    this.players[index].points++;
  }

  decreasePoints(index: number) {
    if (this.players[index].points > 0) {
      this.players[index].points--;
    }
  }
}
