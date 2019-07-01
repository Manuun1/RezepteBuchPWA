import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Using my own custom file for Angular Material Component Imports 
import {angular_material} from "./angular-material";
import { ViewRecipiesComponent } from './recipies/view-recipies/view-recipies.component';
import { IndexComponent } from './index/index.component';
import { ViewRecipiesDetailComponent } from './recipies/view-recipies-detail/view-recipies-detail.component';
import { AddRecipeComponent } from './recipies/add-recipe/add-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewBasketComponent } from './basket/view-basket/view-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewRecipiesComponent,
    IndexComponent,
    ViewRecipiesDetailComponent,
    AddRecipeComponent,
    ViewBasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    angular_material,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
