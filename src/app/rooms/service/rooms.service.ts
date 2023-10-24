import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private httpClient: HttpClient) { }

  getRoom(parameter : string) :Observable<any>{
    return this.httpClient.get("http://localhost:8080/fole/dhoma?id=" + parameter);
  }
}
