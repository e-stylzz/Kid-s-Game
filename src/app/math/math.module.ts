import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathRoutingModule } from './math-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material.module';
import { AdditionComponent } from './addition/addition.component';

@NgModule({
  imports: [
    CommonModule,
    MathRoutingModule,
    MaterialModule
  ],
  declarations: [HomeComponent, AdditionComponent]
})
export class MathModule { }
