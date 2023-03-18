import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { NgModel } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit
{
  ngOnInit(){}
  name:string='';
  email:string='';
  password:string='';
  repassword:string='';
  user:any;

  constructor(private ob:AuthService){}

  register()
  {
    if(this.name == '')
    {
      alert('please enter your name');
      return;
    }
    if(this.email =='')
    {
      alert('please enter your email');
      return;
    }
    if(this.password == '')
    {
      alert('please enter your password');
      return;
    }
    if(this.password !=  this.repassword)
    {
      alert('incorrect password');
      return;
    }

    const cred={
      name:this.name,
      email:this.email,
      password:this.password,
      repassword:this.repassword
    }
    this.ob.register(cred);
    this.name='';
    this.email='';
    this.password='';
    this.repassword='';






    

  }


}
