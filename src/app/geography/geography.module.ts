import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeographyRoutingModule } from './geography-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    GeographyRoutingModule
  ],
  declarations: [HomeComponent]
})
export class GeographyModule { }
