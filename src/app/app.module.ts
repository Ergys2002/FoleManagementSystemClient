import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FloorsComponent } from './floors/floors.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomComponent } from './room/room.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from "./app-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import { NavbarComponent } from './shared/navbar/navbar.component';
import { StudentsComponent } from './students/students.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FloorsComponent,
    RoomsComponent,
    RoomComponent,
    LoginComponent,
    NavbarComponent,
    StudentsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatMenuModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
