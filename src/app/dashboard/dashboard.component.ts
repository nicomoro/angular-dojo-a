import { ComplementComponent } from './../complement/complement.component';
import { SujetComponent } from './../sujet/sujet.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { VerbeComponent } from '../verbe/verbe.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  words = new Array(3);
  complements: string[];
  sujets: string[];
  verbes: string[];

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

  onSelect($event) {
    const { selected } = $event;
    const { index } = $event;

    this.words[index] = selected;
  }
}
