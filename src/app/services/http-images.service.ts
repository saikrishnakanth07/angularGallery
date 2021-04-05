import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';
// import { createClient } from 'pexels';
import {Observable} from 'rxjs';
import {ResponseObj} from '../models/responseObj';

const  httpOptions = {
  headers: new HttpHeaders({
    Authorization: '563492ad6f91700001000001a3a6f81d87794f3986c6618dc3535cb3'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpImagesService {
  readonly KEY: string = '19182960-c9df3bc8689b7b1cc305736de';
  private pagesCount = 10;
  private imagesPerPageCount = 1;
  private imageType = 'photo';
  // readonly client = createClient('563492ad6f91700001000001a3a6f81d87794f3986c6618dc3535cb3');
  constructor(private http: HttpClient, private authService: AuthService) { }

  public getImagesBasedOnAuth(query: string, pageCount: number): Observable<ResponseObj> {
    if (this.authService.isLoggedIn()){
      this.pagesCount = 10;
      this.imagesPerPageCount = 200;
      this.imageType="all"
    }
    // return this.http.get<ResponseObj>(`https://api.pexels.com/v1/search?query=${query}`, httpOptions);
    return  this.http.get<ResponseObj>(`https://pixabay.com/api/?key=${ this.KEY }&q=${query.replace(' ', '+')}&image_type=${this.imageType}&per_page=${this.pagesCount}`);
  }
}
