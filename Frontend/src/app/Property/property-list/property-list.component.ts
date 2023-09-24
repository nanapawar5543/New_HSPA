import { Component } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { Iproperty } from '../Iproperty.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  SellRent=1;
  properties:Array<Iproperty>=[];
 
  constructor(private rouat:ActivatedRoute ,private housingservice:HousingService){}

  ngOnInit():void{
    if(this.rouat.snapshot.url.toString()){
      this.SellRent=2;
    }
    this.housingservice.getallproperties(this.SellRent).subscribe(
      data=>{
        this.properties=data;
      },error=>{
        console.log(error);
      }
      
    )
  }
}