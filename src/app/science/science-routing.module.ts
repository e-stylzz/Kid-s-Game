import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';

const routes: Routes = [
  { path: 'science', component: HomeComponent },
  { path: 'science/periodic-table', component: PeriodicTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScienceRoutingModule {}
