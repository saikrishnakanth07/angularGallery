import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {
  public userName: string | null;

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.userName = null;
    this.authService.getUserDetails().subscribe(x => {
      this.userName = x;
    });
  }

  ngOnInit(): void {
  }

  logOutUser(): void {
    this.authService.logout();
    this.router.navigateByUrl('app/home');
    this.toastr.success('Sucessfully LoggedOut');
  }
}
