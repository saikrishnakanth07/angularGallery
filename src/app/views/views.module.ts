import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContainerComponent } from './home-conatiner/home-conatiner.component';
import {MaterialShareModule} from '../shared/material-share.module';
import {GalleryModule} from '@ngx-gallery/core';
import {LightboxModule} from '@ngx-gallery/lightbox';
import {NgxPaginationModule} from 'ngx-pagination';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [HomeContainerComponent, GalleryComponent, AboutComponent],
  imports: [
    CommonModule,
    MaterialShareModule,
    GalleryModule,
    LightboxModule,
    NgxPaginationModule
  ],
  entryComponents: []
})
export class ViewsModule { }
