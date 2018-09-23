import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdditionComponent } from './addition/addition.component';

const routes: Routes = [
  { path: 'math', component: HomeComponent},
  { path: 'math/addition', component: AdditionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathRoutingModule { }
