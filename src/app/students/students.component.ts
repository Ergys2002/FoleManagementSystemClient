import {Component, OnInit} from '@angular/core';
import {StudentsService} from "./service/students.service";
import {Student} from "../models/student";
import {Studentdto} from "../models/studentdto";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  students !: Studentdto[];
constructor(private studentsService: StudentsService) {
}

  ngOnInit(): void {
    this.studentsService.getStudents().subscribe({
      next :(res : any) => {
       this.students = res
      }
    })
  }


  deleteStudent(id: string) {
      this.studentsService.deleteStudent(id).subscribe({
        next: (res: any) => {
          // On successful deletion, update the student list
          this.studentsService.getStudents().subscribe({
            next: (res: any) => {
              this.students = res;

            },
            error: (error) => {
              console.error('Error fetching updated student data:', error);
            }
          });
        },
        error: (error) => {
          console.error('Error deleting student:', error);
        }
      });
      this.refreshPage()
    }
// Fetch the updated student data

  refreshPage() {
    window.location.reload();
  }

}


