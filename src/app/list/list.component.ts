import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  selected: string;
  @Input()
  words: string[];

  @Input()
  index: number;

  @Output()
  select: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setSelected(value: string) {
    this.selected = value;
    console.log(`Complement : ${this.selected}`);
    this.select.emit(
      {
        selected: this.selected,
        index: this.index
      }
    );
  }

}
