import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomepageFloorsSharing {

  constructor() { }

  private sharedData = new BehaviorSubject<any>(null);

  setSharedData(data: any) {
    this.sharedData.next(data);
  }

  getSharedData() {
    return this.sharedData.asObservable();
  }
}
