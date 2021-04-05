import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BaseRoute} from './constants/routing';
import {LayoutComponent} from './layout/layout.component';
import {LayoutModule, subRoutes} from './layout/layout.module';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: BaseRoute.BASE_ROUTE
}, {
  path: BaseRoute.BASE_ROUTE,
  component: LayoutComponent,
  children: subRoutes,
}];

@NgModule({
  imports: [LayoutModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
