import {Component, OnInit} from '@angular/core';
import {OpenRoomsService} from "../services/open-rooms.service";
import {Room} from "../models/room";
import {HomepageFloorsSharing} from "../services/homepage-floors-sharing";
import {FloorsRoomsSharingService} from "../services/floors-rooms-sharing.service";
import {RoomsRoomSharingService} from "../services/rooms-room-sharing.service";
import {RoomsService} from "./service/rooms.service";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit{
  rooms !: Room[];
  building_id !: string;
  floor_id !: number;
  constructor(private dataSharing : FloorsRoomsSharingService, private roomSharing : RoomsRoomSharingService, private roomService: RoomsService) {}

  ngOnInit(): void {
    this.dataSharing.getSharedData().subscribe((data) => {
      this.rooms = data.res; // Assuming 'res' is an array of Floor objects
      this.building_id = data.building; // Assuming 'building' is a string
      this.floor_id = data.floor_id
    });
  }

    openRoom(room_id: string){
        this.roomService.getRoom(room_id).subscribe({
            next: (res: Room[]) => {
                this.roomSharing.setSharedData(res);
            }
        })
    }




}
