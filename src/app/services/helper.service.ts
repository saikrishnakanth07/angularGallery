import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private selectedLabel: BehaviorSubject<string>;
  constructor() {
    this.selectedLabel = new BehaviorSubject<string>('people');
  }

  setLabel(value: string): void{
    this.selectedLabel.next(value);
  }
  getLabe(): BehaviorSubject<string>{
   return this.selectedLabel;
  }
}
