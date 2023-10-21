import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  constructor(private http: HttpClient) { }

  getRooms(build_id:string, floor_id: number): Observable<any>{
    return this.http.get('https::localhost/' + build_id + '/' + floor_id.toString())
  }
}
