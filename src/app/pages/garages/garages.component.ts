import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-garages',
  templateUrl: './garages.component.html',
  styleUrls: ['./garages.component.css']
})
export class GaragesComponent {
  constructor(private ob:HeroService,private r:Router)
  {

  }
  database=this.ob.getdata();
  goto(id:any)
  {
    localStorage.setItem('id',id)
    this.r.navigate(['/single'])
  }

}
