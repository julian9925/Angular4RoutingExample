import { CardComponent } from './card/card.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fallbackRoute } from './fallback-route';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboradComponent },
  { path: 'cards/:type', component: CardComponent },
  { path: 'charts', loadChildren: './charts/charts.module.ts#ChartsModule'},
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
