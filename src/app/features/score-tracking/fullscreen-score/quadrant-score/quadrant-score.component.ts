import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quadrant-score',
  templateUrl: './quadrant-score.component.html',
  styleUrls: ['./quadrant-score.component.css'],
})
export class QuadrantScoreComponent {
  @Input() points!: number;
  @Input() icon!: string;
  @Input() backgroundColor!: string;
  @Input() position!: 'left' | 'right';
  @Input() orientation!:
    | 'default'
    | 'rotated-left'
    | 'rotated-right'
    | 'rotated-up';
  @Output() increasePoints = new EventEmitter<void>();
  @Output() decreasePoints = new EventEmitter<void>();
  @Output() openCommanderDamageTrackerEmit = new EventEmitter<void>();

  onIncreasePoints() {
    this.increasePoints.emit();
  }

  onDecreasePoints() {
    this.decreasePoints.emit();
  }

  openCommanderDamageTracker() {
    this.openCommanderDamageTrackerEmit.emit();
  }
}
