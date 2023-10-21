import {Component, OnInit} from '@angular/core';
import {OpenRoomsService} from "../services/open-rooms.service";
import {Room} from "../floors/models";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{
  rooms !: Room[];
  constructor(private openRooms: OpenRoomsService) {}

  ngOnInit(): void {
    this.openRooms.getRooms.subscribe({
      next: (res: any) => {
        this.rooms = res;
      }
    })
  }



}
