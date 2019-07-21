import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';
import { MultiplecationComponent } from './multiplecation/multiplecation.component';

const routes: Routes = [
  { path: 'math', component: HomeComponent},
  { path: 'math/addition', component: AdditionComponent},
  { path: 'math/subtraction', component: SubtractionComponent},
  { path: 'math/multiplecation', component: MultiplecationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathRoutingModule { }
