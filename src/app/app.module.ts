import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Using my own custom file for Angular Material Component Imports 
import {angular_material} from "./angular-material";
import { ViewRecipiesComponent } from './recipies/view-recipies/view-recipies.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewRecipiesComponent,
    IndexComponent
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
