import {Component, OnInit} from '@angular/core';
import {Floor} from "../models/floor";
import {FloorsRoomsSharingService} from "../services/floors-rooms-sharing.service";
import {FloorService} from "./service/floor.service";
import {Room} from "../models/room";
import {OpenRoomsService} from "../services/open-rooms.service";
import {HomepageFloorsSharing} from "../services/homepage-floors-sharing";

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent implements OnInit{
  floors !: Floor[];
  building !: string;

  constructor(private linkerService: FloorsRoomsSharingService, private floorService: FloorService,
              private linkRooms: OpenRoomsService, private dataSharing: HomepageFloorsSharing) {
  }

  ngOnInit(): void {
    this.dataSharing.getSharedData().subscribe((data) => {
      this.floors = data.res; // Assuming 'res' is an array of Floor objects
      this.building = data.building; // Assuming 'building' is a string
    });
  }

  openFloor(build_id: string, floor_id: number){
    this.floorService.getRooms(build_id, floor_id).subscribe({
      next: (res: Room[]) => {
        const temp = {
          res: res,
          building_id: build_id,
          floor_id: floor_id
        }
        this.linkerService.setSharedData(temp);
      }
    })
  }


}
