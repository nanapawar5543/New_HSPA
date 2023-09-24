import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { Iproperty } from '../Property/Iproperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor(private http:HttpClient){}
  ngOnInit():void{
    
  }

  getallproperties(SellRent:number):Observable<Iproperty[]> {
    return this.http.get("data/properties.json").pipe(
      map((data:{[key:string]:any} )=> {
        const propertiesArray:Array<Iproperty>=[];
        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent===SellRent){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    )
  }
}
