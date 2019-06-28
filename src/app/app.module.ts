import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Using my own custom file for Angular Material Component Imports 
import {angular_material} from "./angular-material";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    angular_material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
