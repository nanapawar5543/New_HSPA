import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/property-card/property-card.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyDetailsComponent } from './Property/property-details/property-details.component';

const appRoutes:Routes=[
  {path:'',component:PropertyListComponent},
  {path:'rent-property',component:AddPropertyComponent},
  {path:'add-property',component:AddPropertyComponent},
  {path:'property-details/:id',component:PropertyDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
