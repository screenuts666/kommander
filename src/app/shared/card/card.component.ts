import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() title!: string;
  @Input() image!: string;
  @Input() roll: number | null = null;
  @Input() showDelete: boolean = false;
  @Input() maxRoll: number | null = null;
  @Output() delete = new EventEmitter<void>();

  isMaxRoll: boolean = false;

  ngOnInit() {
    this.isMaxRoll = this.roll !== null && this.roll === this.maxRoll;
  }

  deletePlayer() {
    this.delete.emit();
  }
}
