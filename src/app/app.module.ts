import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchComponent } from './pages/search/search.component';
import { LocationComponent } from './pages/location/location.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { GaragesComponent } from './pages/garages/garages.component';
import { SingleComponent } from './pages/single/single.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    SearchComponent,
    LocationComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    GaragesComponent,
    SingleComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
