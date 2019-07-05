import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ViewRecipiesComponent } from "./recipies/view-recipies/view-recipies.component";
import { ViewRecipiesDetailComponent } from "./recipies/view-recipies-detail/view-recipies-detail.component";
import { AddRecipeComponent } from "./recipies/add-recipe/add-recipe.component";
import { ViewBasketComponent } from "./basket/view-basket/view-basket.component";

const routes: Routes = [
  { path: "", component: ViewRecipiesComponent },
  { path: "view_recipe_detail", component: ViewRecipiesDetailComponent },
  { path: "add_recipe", component: AddRecipeComponent },
  { path: "view_basket", component: ViewBasketComponent }
  //{ path: "add_recipe", component: AddRecipeComponent },
  //{ path: "add_recipe", component: AddRecipeComponent },
  //{ path: "add_recipe", component: AddRecipeComponent },
  //{ path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
