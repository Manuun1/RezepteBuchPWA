import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
//Using my own custom file for Angular Material Component Imports 
import {angular_material} from "./modules_import/angular-material";
import { ViewRecipiesComponent } from './recipies/view-recipies/view-recipies.component';
import { IndexComponent } from './page-components/index/index.component';
import { ViewRecipiesDetailComponent } from './recipies/view-recipies-detail/view-recipies-detail.component';
import { AddRecipeComponent } from './recipies/add-recipe/add-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewBasketComponent } from './basket/view-basket/view-basket.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ViewBasketEditComponent } from './basket/view-basket-edit/view-basket-edit.component';
import { ViewIngredientsComponent } from './ingredients/view-ingredients/view-ingredients.component';
import { ContactComponent } from './page-components/contact/contact.component';
import { PagenotfoundComponent } from './page-components/pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewRecipiesComponent,
    IndexComponent,
    ViewRecipiesDetailComponent,
    AddRecipeComponent,
    ViewBasketComponent,
    ViewBasketEditComponent,
    ViewIngredientsComponent,
    ContactComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    angular_material,
    FormsModule, 
    ReactiveFormsModule, MatTableModule, MatPaginatorModule, MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ViewBasketEditComponent]
})
export class AppModule { }
