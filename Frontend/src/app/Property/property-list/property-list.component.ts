import { Component } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  properties:Array<any>=[];
 
  constructor(private housingservice:HousingService){}

  ngOnInit():void{
    this.housingservice.getallproperties().subscribe(
      data=>{
        this.properties=data;
      },error=>{
        console.log(error);
      }
      
    )
  }
}