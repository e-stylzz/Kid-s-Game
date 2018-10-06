import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BirdsComponent } from './birds/birds.component';
import { DinosaursComponent } from './dinosaurs/dinosaurs.component';

const routes: Routes = [
  { path: 'nature', component: HomeComponent},
  { path: 'nature/birds', component: BirdsComponent},
  { path: 'nature/dinosaurs', component: DinosaursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NatureRoutingModule { }
