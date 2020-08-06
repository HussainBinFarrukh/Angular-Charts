import { BarComponent } from './bar-chart/bar-chart.component';
import { BarVerticleComponent } from './bar-verticle-chart/bar-verticle-chart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component: BarComponent
  },  {
    path:'',
    component: BarVerticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
