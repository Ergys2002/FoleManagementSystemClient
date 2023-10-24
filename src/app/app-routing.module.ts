import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FloorsComponent} from './floors/floors.component'
import {RoomComponent} from './room/room.component'
import {RoomsComponent} from './rooms/rooms.component'
import {HomepageComponent} from './homepage/homepage.component'
import {LoginComponent} from './login/login.component'
import {StudentsComponent} from "./students/students.component";



const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'home'},
    {path:'home', component: HomepageComponent},
    {path:"floors", component:FloorsComponent},
    {path:"rooms", component:RoomsComponent},
    {path:"room", component:RoomComponent },
    {path:"students", component:StudentsComponent },
    {path:"login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
