import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenRoomsService {

  constructor() { }

  getRooms = new EventEmitter();

}
