import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {
  d:any
  constructor(private m:HeroService){

  }
  ngOnInit()
  {
    let id:any=localStorage.getItem('id');
    let ar=this.m.getdata();
    this.d=ar.filter(e=>e.id===id);
  }

}
