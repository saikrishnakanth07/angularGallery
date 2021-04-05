import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../auth/login/login.component';
import {AuthModule} from '../auth/auth.module';
import {RegisterComponent} from '../auth/register/register.component';
import {PageNotFoundComponent} from '../shared/page-not-found/page-not-found.component';
import {BaseRoute} from '../constants/routing';
import {HomeContainerComponent} from '../views/home-conatiner/home-conatiner.component';
import {ViewsModule} from '../views/views.module';
import {LoginActivateGuard} from '../auth/guards/login-activate.guard';
import {MaterialShareModule} from '../shared/material-share.module';
import {NgxPaginationModule} from 'ngx-pagination';
import {GalleryComponent} from '../views/gallery/gallery.component';
import {CheckSessionGuard} from '../auth/guards/check-session.guard';
import {AboutComponent} from '../views/about/about.component';

export  const subRoutes: Routes = [{
  path: '',
  redirectTo: BaseRoute.BASE_ROUTE_HOME,
  pathMatch: 'full'
}, {
  path: BaseRoute.BASE_ROUTE_HOME,
  component: HomeContainerComponent,

},
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'register',
    component: RegisterComponent
  }, {
    path: 'gallery',
    component: GalleryComponent,
    canActivate: [LoginActivateGuard]
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthModule,
    RouterModule, ViewsModule, MaterialShareModule, NgxPaginationModule
  ]
})
export class LayoutModule { }
