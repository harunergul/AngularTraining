import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-zikirmatik',
  templateUrl: './zikirmatik.component.html',
  styleUrls: ['./zikirmatik.component.scss'],
})
export class ZikirmatikComponent implements OnInit {
  @Input() count = 0;

  @Output() zikirCompletedEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  increment($event) {
    this.count++;
    this.zikirCompletedEvent.emit(this.count);
  }

  decrement($event) {
    if (this.count == 0) return;
    this.count--;
    this.zikirCompletedEvent.emit(this.count);
  }
}
