import { Component } from '@angular/core';
import {Room} from "../models/room";
import {FloorsRoomsSharingService} from "../services/floors-rooms-sharing.service";
import {RoomsRoomSharingService} from "../services/rooms-room-sharing.service";
import {RoomsService} from "../rooms/service/rooms.service";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent {
  room !: Room;

  constructor(private roomSharing : RoomsRoomSharingService) {}

  ngOnInit(): void {
    this.roomSharing.getSharedData().subscribe((data) => {
      this.room = data; // Assuming 'data' is the room object
    });
  }
}
