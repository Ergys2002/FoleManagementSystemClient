import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkerService {

  constructor() { }

  getFloors = new EventEmitter();

}
