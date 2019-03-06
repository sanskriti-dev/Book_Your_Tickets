import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import  {AngularFireAuthModule} from "angularfire2/auth";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BusComponent } from './bus/bus.component';
import { FlightComponent } from './flight/flight.component';
import { HotelComponent } from './hotel/hotel.component';
import {environment} from "../environments/environment";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    BusComponent,
    FlightComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path:' ' , component:HomeComponent},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent},
      {path:'flight',component:FlightComponent},
      {path:'bus',component:BusComponent},
      {path:'hotel',component:HotelComponent}

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
