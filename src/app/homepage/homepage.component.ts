import { Component } from '@angular/core';
import {HomepageService} from "./service/homepage.service";
import {Floor} from "../models/floor";
import {FloorsRoomsSharingService} from "../services/floors-rooms-sharing.service";
import {HomepageFloorsSharing} from "../services/homepage-floors-sharing";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
    constructor(private service: HomepageService , private dataSharingService: HomepageFloorsSharing) {

    }

    onClick(parameter: string){
       this.service.getFloors(parameter).subscribe({
         next :(res : any) => {
             const temp = {
                 res: res,
                 building: parameter
             }
           // this.linker.getFloors.emit(temp);
           this.dataSharingService.setSharedData(temp);
        }
       })
    }
}
