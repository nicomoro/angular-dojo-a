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

  @ViewChild(SujetComponent)
  s: SujetComponent;

  @ViewChild(VerbeComponent)
  v: VerbeComponent;

  @ViewChild(ComplementComponent)
  c: ComplementComponent;

  constructor() { }

  ngOnInit() {
    // console.log(this.s, this.v, this.c);
  }

}
