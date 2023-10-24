import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient : HttpClient) { }

  getStudents() : Observable<any>{
    return this.httpClient.get("http://localhost:8080/students")
  }

  deleteStudent(id: string): Observable<any> {
    return this.httpClient.put<any>("http://localhost:8080/students/delete/" + id, {});
  }
}
