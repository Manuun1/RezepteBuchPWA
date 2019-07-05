import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
//Using my own custom file for Angular Material Component Imports 
import {angular_material} from "./modules_import/angular-material";
import {firebase_modules} from "./modules_import/firebase_modules";
import { ViewRecipiesComponent } from './recipies/view-recipies/view-recipies.component';
import { IndexComponent } from './page-components/index/index.component';
import { ViewRecipiesDetailComponent } from './recipies/view-recipies-detail/view-recipies-detail.component';
import { AddRecipeComponent } from './recipies/add-recipe/add-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewBasketComponent } from './basket/view-basket/view-basket.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { Globals } from './global_variables';
import { PreloaderPageComponent } from './basket/preloader-page/preloader-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewRecipiesComponent,
    IndexComponent,
    ViewRecipiesDetailComponent,
    AddRecipeComponent,
    ViewBasketComponent,
    PreloaderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    angular_material,
    firebase_modules,
    FormsModule, 
    ReactiveFormsModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
