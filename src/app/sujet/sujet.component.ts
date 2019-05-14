import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.css'],
})
export class SujetComponent implements OnInit {
  sujets: string[];
  selected: string;
  @Output()
  select: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.sujets = [
      'Eddy',
      'Nico',
      'Jeremy G',
      'Felix',
      'Cyrpien',
      'Martial',
      'Gordian',
      'Jocelyn',
      'Jeremy C',
      'Dylan',
    ];
  }

  ngOnInit() {
  }

  setSelected(value: string) {
    this.selected = value;
    console.log(`Sujet : ${this.selected}`);
    this.select.emit(
      {
        selected: this.selected,
        index: 0
      }
    );
  }

}
