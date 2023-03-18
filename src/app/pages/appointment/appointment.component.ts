import { Component } from '@angular/core';
import { Firestore,collection } from '@angular/fire/firestore';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  name:string='';
  complaint:string='';
  location:string='';
  phone:string='';
  contactdata:any

  constructor(private ob:AuthService,private fire:Firestore){}

  
  submit()
  {
    const data={
      name:this.name,
      complaint:this.complaint,
      location:this.location,
      phone:this.phone
    }

    console.log(data);
    const docRef=collection(this.fire,"contactdata")
    this.ob.insertData(docRef,data)
    this.name='';
    this.complaint='';
    this.location='';
    this.phone='';
  }



}
