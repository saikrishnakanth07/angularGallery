import { Component, OnInit } from '@angular/core';
import {HelperService} from '../services/helper.service';
import {AuthService} from '../services/auth.service';
import {NavigationEnd, Route, Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  readonly labels: string[] = ['Ocean', 'Tigers', 'flowers', 'holi', 'nature', 'building', 'sea'];
  public selected = 'people';
  public loginFlag = false;
  public showLabels = true;
  p = 1;
  constructor(private helperService: HelperService, private authService: AuthService, private router: Router) {
    this.authService.getUserDetails().subscribe(() => {
      this.loginFlag = this.authService.isLoggedIn() ? true : false;
    });
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd){
        console.log(val.url);
        if (val.url === '/app/login' || val.url === '/app/register' || val.url === '/app/about'){
          this.showLabels = false;
        }else{
          this.showLabels = true;
        }
      }
    });
  }

  ngOnInit(): void {
    this.helperService.setLabel(this.selected);
  }

  onUserInput(value: any): void {
      this.selected = value;
      this.helperService.setLabel(value);
  }
}
