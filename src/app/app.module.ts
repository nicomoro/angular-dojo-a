import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SujetComponent } from './sujet/sujet.component';
import { VerbeComponent } from './verbe/verbe.component';
import { ComplementComponent } from './complement/complement.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SujetComponent,
    VerbeComponent,
    ComplementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
