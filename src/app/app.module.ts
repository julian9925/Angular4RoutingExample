import { ChartsRoutingModule } from './charts/charts-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { CardComponent } from './card/card.component';
import { FlotComponent } from './charts/flot/flot.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboradComponent,
    CardComponent,
    FlotComponent
  ],
  imports: [
    BrowserModule,
    ChartsRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
