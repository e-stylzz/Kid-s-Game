import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BirdsComponent } from './birds/birds.component';
import { DinosaursComponent } from './dinosaurs/dinosaurs.component';
import { Level2Component } from './dinosaurs/level2/level2.component';
import { BugsComponent } from './bugs/bugs.component';

const routes: Routes = [
  { path: 'nature', component: HomeComponent},
  { path: 'nature/birds', component: BirdsComponent},
  { path: 'nature/dinosaurs', component: DinosaursComponent},
  { path: 'nature/dinosaurs/2', component: Level2Component},
  { path: 'nature/bugs', component: BugsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NatureRoutingModule { }
