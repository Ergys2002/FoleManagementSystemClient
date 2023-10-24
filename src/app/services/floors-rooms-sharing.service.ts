import { Injectable,EventEmitter } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FloorsRoomsSharingService {

  constructor() { }

  private sharedData = new BehaviorSubject<any>(null);

  setSharedData(data: any) {
    this.sharedData.next(data);
  }

  getSharedData() {
    return this.sharedData.asObservable();
  }

}
