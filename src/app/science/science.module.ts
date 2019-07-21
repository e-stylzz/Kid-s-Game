import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScienceRoutingModule } from './science-routing.module';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  imports: [CommonModule, ScienceRoutingModule, MaterialModule],
  declarations: [PeriodicTableComponent, HomeComponent],
})
export class ScienceModule {}
