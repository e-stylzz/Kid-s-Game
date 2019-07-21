import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathRoutingModule } from './math-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material.module';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplecationComponent } from './multiplecation/multiplecation.component';

@NgModule({
  imports: [
    CommonModule,
    MathRoutingModule,
    MaterialModule
  ],
  declarations: [HomeComponent, AdditionComponent, SubtractionComponent, MultiplecationComponent]
})
export class MathModule { }
