import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { StatesComponent } from "./states/states.component";
import { StatesBySizeComponent } from "./states-by-size/states-by-size.component";

const routes: Routes = [
  { path: "geography", component: HomeComponent },
  { path: "geography/states", component: StatesComponent },
  { path: "geography/states-size", component: StatesBySizeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeographyRoutingModule {}
