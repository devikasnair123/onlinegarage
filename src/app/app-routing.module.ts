import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GaragesComponent } from './pages/garages/garages.component';
import { HomeComponent } from './pages/home/home.component';
import { LocationComponent } from './pages/location/location.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent

  },
  {
    path:'signup',component:SignupComponent
  },
 
  {
    path:'contact',component:ContactComponent

  },
  {
    path:'search',component:SearchComponent
  },
  {
    path:'location',component:LocationComponent
  },
  {
    path:'garages',component:GaragesComponent
  },
  {
    path:'single',component:SingleComponent
  },
  {
    path:'appointment',component:AppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
