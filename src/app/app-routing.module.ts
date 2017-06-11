import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fallbackRoute } from "./fallback-route";

const routes: Routes = [
  { path: '', redirectTo: '/page1', pathMatch: 'full'},
  // { path: '', component: Page1Component},
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
