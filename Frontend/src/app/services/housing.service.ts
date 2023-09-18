import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor(private http:HttpClient){}
  ngOnInit():void{
    
  }

  getallproperties(){
    return this.http.get("data/properties.json").pipe(
      map((data:{[key:string]:any} )=> {
        const propertiesArray:Array<any>=[];
        for(const id in data){
          if(data.hasOwnProperty(id)){
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    )
  }
}
