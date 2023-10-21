import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FloorsComponent} from './floors/floors.component'
import {RoomComponent} from './room/room.component'
import {RoomsComponent} from './rooms/rooms.component'
import {HomepageComponent} from './homepage/homepage.component'
import {LoginComponent} from './login/login.component'



const routes: Routes = [
    // {path:'', pathMatch:'full', redirectTo:'home'},
    {path:'home', component: HomepageComponent},
    {path:"floors", component:FloorsComponent},
    {path:":id/:fid/rooms", component:RoomsComponent},
    {path:":id/:fid/:rid/room", component:RoomComponent },
    {path:"login", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
