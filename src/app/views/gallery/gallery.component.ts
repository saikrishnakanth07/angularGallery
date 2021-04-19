import { Component, OnInit } from '@angular/core';
import {Gallery, GalleryConfig, GalleryItem, ImageItem} from '@ngx-gallery/core';
import {Hit, ResponseObj} from '../../models/responseObj';
import {HttpImagesService} from '../../services/http-images.service';
import {HelperService} from '../../services/helper.service';
import {LightBoxObj} from '../home-conatiner/home-conatiner.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  items: GalleryItem[] = [];
  // @ts-ignore
  public imageData: ResponseObj;
  imageDataRaw: LightBoxObj[] = [];
  // @ts-ignore
  private  selectedLabel: string;
  p = 1;
  // @ts-ignore
  config: GalleryConfig = {};
  constructor(
    private httpImagesService: HttpImagesService,
    public gallery: Gallery,
    private helperService: HelperService
  ) {
    this.helperService.getLabe().subscribe(x => {
      this.selectedLabel = x;
      this.init();
    });
    this.config.gestures = true;
    this.config.nav = true;
    this.config.dots = true;
    this.config.loop = true;
    this.config.thumb = true;
    this.config.zoomOut = 4;
    this.config.imageSize = 'cover';
    this.config.loadingMode = 'determinate';
    this.config.autoPlay = true;
  }

  ngOnInit(): void {
    this.init();
  }

  private init(): void {
    this.imageDataRaw = [];
    this.httpImagesService.getImagesBasedOnAuth(this.selectedLabel, 1).subscribe(data => {
      this.imageData = data;
      this.imageData.hits.forEach((x: Hit) => {
        // const cssClass = x.height > x.width ? 'vertical' : 'horizontal';
        this.imageDataRaw.push({src: x.previewURL, caption: x.user, largeImageURL: x.largeImageURL});
      });
      this.items = this.imageDataRaw.map(item =>
        new ImageItem({ src: item.largeImageURL, thumb: item.largeImageURL })
      );
      this.gallery.ref().load(this.items);
      this.gallery.ref().setConfig(this.config);
    });
  }
}
