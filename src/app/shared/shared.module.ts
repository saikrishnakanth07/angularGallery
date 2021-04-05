import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import {RouterModule} from '@angular/router';
import {MaterialShareModule} from './material-share.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
    declarations: [TopNavBarComponent, FooterBarComponent, PageNotFoundComponent],
  exports: [
    TopNavBarComponent,
    FooterBarComponent

  ],
  imports: [
    CommonModule,
    MaterialShareModule,
    RouterModule
  ]
})
export class SharedModule { }
