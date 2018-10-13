import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NatureRoutingModule } from './nature-routing.module';
import { HomeComponent } from './home/home.component';
import { BirdsComponent } from './birds/birds.component';
import { MaterialModule } from '../shared/material.module';
import { DinosaursComponent } from './dinosaurs/dinosaurs.component';
import { Level2Component } from './dinosaurs/level2/level2.component';

@NgModule({
  imports: [
    CommonModule,
    NatureRoutingModule,
    MaterialModule
  ],
  declarations: [HomeComponent, BirdsComponent, DinosaursComponent, Level2Component]
})
export class NatureModule { }
