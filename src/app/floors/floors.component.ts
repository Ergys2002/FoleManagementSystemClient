import {Component, OnInit} from '@angular/core';
import {Floor} from "../homepage/model";
import {LinkerService} from "../services/linker.service";
import {FloorService} from "./service/floor.service";
import {Room} from "./models";
import {OpenRoomsService} from "../services/open-rooms.service";

@Component({
  selector: 'app-floors',
  templateUrl: './floors.component.html',
  styleUrls: ['./floors.component.css']
})
export class FloorsComponent implements OnInit{
  floors !: Floor[];
  building !: string;

  constructor(private linkerService: LinkerService, private floorService: FloorService,
              private linkRooms: OpenRoomsService) {
  }

  ngOnInit(): void {
    this.linkerService.getFloors.subscribe({
      next : (result : any) => {
        this.floors = result.res;
        this.building = result.building
      },
      error : () => {},
    })
  }

  openFloor(build_id: string, floor_id: number){
    this.floorService.getRooms(build_id, floor_id).subscribe({
      next: (res: Room[]) => {
        this.linkRooms.getRooms.emit(res);
      }
    })
  }


}
