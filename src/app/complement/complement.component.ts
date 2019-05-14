import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-complement',
  templateUrl: './complement.component.html',
  styleUrls: ['./complement.component.css'],
})
export class ComplementComponent implements OnInit {
  complements: string[];
  selected: string;
  @Output()
  select: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.complements = [
      'un pain',
      'une chaussure',
      'une course',
      'copieusement',
      'une perche',
      'un chat',
      'le travail',
      'au chinois',
      'le vent',
      'un palmier',
      'une voiture'
    ];
  }

  ngOnInit() {
  }

  setSelected(value: string) {
    this.selected = value;
    console.log(`Complement : ${this.selected}`);
    this.select.emit(
      {
        selected: this.selected,
        index: 2
      }
    );
  }

}
