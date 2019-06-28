import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewRecipiesComponent } from './recipies/view-recipies/view-recipies.component';

const routes: Routes = [
  { path: "", component: ViewRecipiesComponent }
  //{ path: "add_data", component: AddDataComponent },
  //{ path: "search_data", component: SearchDataComponent },
  //{ path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
