import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstCostilComponent } from './first-costil/first-costil.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: '', component: FirstCostilComponent },
  { path: 'second', component: SecondComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
