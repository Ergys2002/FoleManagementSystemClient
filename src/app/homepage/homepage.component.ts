import { Component } from '@angular/core';
import {HomepageService} from "./service/homepage.service";
import {Floor} from "./model";
import {LinkerService} from "../services/linker.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
    constructor(private service: HomepageService , private linker : LinkerService) {

    }

    onClick(parameter: string){
       this.service.getFloors(parameter).subscribe({
         next :(res : any) => {
             const temp = {
                 res: res,
                 building: parameter
             }
           this.linker.getFloors.emit(temp);
        }
       })
    }
}
