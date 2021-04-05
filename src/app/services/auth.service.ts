import { Injectable } from '@angular/core';
import {userDetails} from '../data/userCred';
import {UserDb} from '../models/userDb';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId: BehaviorSubject<string|null>;
  constructor() {
    this.userId = new BehaviorSubject<string|null>(null);
  }

  public login(username: any, password: any): boolean {
   return  userDetails.some(x => x.userid === username && x.password === password);
  }

  setUser(username: any): void {
    sessionStorage.setItem('loggedInUser', username);
    this.getLoggedInUserName();
  }

  getLoggedInUserName(): void{
    const user = sessionStorage.getItem('loggedInUser');
    if (!user){
      this.userId.next(null);
    }
    const data = userDetails.find((x: UserDb): string | null => {
  if (x.userid === user){
    return x.username;
  }else{
    return null;
  }
  });
    data ? this.userId.next(data.username) : this.userId.next(null);
  }
 public getUserDetails(): BehaviorSubject<string |null>{
    return  this.userId;
  }
  public setUserDetails(name: string): void{
     this.userId.next(name);
  }
  logout(): void {
    sessionStorage.clear();
    this.userId.next(null);
  }

  public isLoggedIn(): string|null {
    return sessionStorage.getItem('loggedInUser');
  }
}
