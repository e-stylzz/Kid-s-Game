import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { MathModule } from './math/math.module';
import { GeographyModule } from './geography/geography.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NatureModule } from './nature/nature.module';
import { ScienceModule } from './science/science.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MathModule,
    GeographyModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NatureModule,
    ScienceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
