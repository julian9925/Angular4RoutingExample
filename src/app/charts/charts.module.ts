import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlotComponent } from "./flot/flot.component";
import { ChartsRoutingModule } from './charts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ChartsRoutingModule
  ],
  declarations: [
    FlotComponent
  ]
})
export class ChartsModule { }
