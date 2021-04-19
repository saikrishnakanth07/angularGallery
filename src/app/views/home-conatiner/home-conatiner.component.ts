import {Component, Input, OnInit} from '@angular/core';
import {HttpImagesService} from '../../services/http-images.service';
// import {Lightbox, LightboxEvent} from 'ngx-lightbox';
import {Hit, ResponseObj} from '../../models/responseObj';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';
import {HelperService} from '../../services/helper.service';


@Component({
  selector: 'app-home-conatiner',
  templateUrl: './home-conatiner.component.html',
  styleUrls: ['./home-conatiner.component.scss']
})
export class HomeContainerComponent implements OnInit {
  items: GalleryItem[] = [];
  // @ts-ignore
  public imageData: ResponseObj;
  imageDataRaw: LightBoxObj[] = [];
  // @ts-ignore
  private  selectedLabel: string;
  p = 1;
  constructor(
    private httpImagesService: HttpImagesService,
    public gallery: Gallery,
    private helperService: HelperService
  ) {
    this.helperService.getLabe().subscribe(x => {
      this.selectedLabel = x;
      this.init();
    });
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
    });
  }
}


export interface  LightBoxObj{
  src: string;
  caption: string;
  largeImageURL: string;
}

