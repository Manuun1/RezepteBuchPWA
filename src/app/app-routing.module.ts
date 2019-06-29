import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewRecipiesComponent } from './recipies/view-recipies/view-recipies.component';
import { ViewRecipiesDetailComponent } from './recipies/view-recipies-detail/view-recipies-detail.component';

const routes: Routes = [
  { path: "", component: ViewRecipiesComponent },
  { path: "view_recipe_detail", component: ViewRecipiesDetailComponent }
  //{ path: "search_data", component: SearchDataComponent },
  //{ path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
