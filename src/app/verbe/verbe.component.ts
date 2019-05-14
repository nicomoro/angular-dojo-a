import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-verbe',
  templateUrl: './verbe.component.html',
  styleUrls: ['./verbe.component.css'],
})
export class VerbeComponent implements OnInit {
  verbes: string[];
  selected: string;
  @Output()
  select: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.verbes = [
      'mange',
      'boit',
      'fume',
      'dort',
      'finit',
      'court',
      'travaille',
      'insulte',
      'tend',
      'parle'
    ];
   }

  ngOnInit() {
  }

  setSelected(value: string) {
    this.selected = value;
    console.log(`Verbe : ${this.selected}`);
    this.select.emit(
      {
        selected: this.selected,
        index: 1
      }
    );
  }

}
