import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeographyRoutingModule } from './geography-routing.module';
import { HomeComponent } from './home/home.component';
import { StatesComponent } from './states/states.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [
    CommonModule,
    GeographyRoutingModule,
    MaterialModule
  ],
  declarations: [HomeComponent, StatesComponent]
})
export class GeographyModule { }
