import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BirdsComponent } from './birds/birds.component';

const routes: Routes = [
  { path: 'nature', component: HomeComponent},
  { path: 'nature/birds', component: BirdsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NatureRoutingModule { }
