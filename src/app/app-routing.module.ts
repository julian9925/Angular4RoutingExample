import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fallbackRoute } from "./fallback-route";
import { DashboradComponent } from './dashborad/dashborad.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboradComponent },
  { path: 'cards/:type', component: CardComponent },
  { path: 'charts', loadChildren: './charts/charts.module#ChartsModule'}
  // fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
