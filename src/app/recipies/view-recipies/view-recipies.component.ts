import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { RecipiesService, recipe } from 'src/app/services/recipies.service';


@Component({
  selector: "app-view-recipies",
  templateUrl: "./view-recipies.component.html",
  styleUrls: ["./view-recipies.component.css"]
})
export class ViewRecipiesComponent implements OnInit {
  recipies: recipe[] = [];

  constructor(
    private recipeService: RecipiesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.recipies = [];
    //Parsing the observable we got from the data.service.ts
    this.recipeService.get_recipies().subscribe(item => {
      item.forEach(element => {
        //Add this correct path prefix to every image reference, in order to keep the declaration in the dataservice lightweight
        //if condition is a workaround to avoid putting ./assets/images in the array multiple times.
        if (element.image.indexOf("assets/images") == -1 && element.image.indexOf("http")==-1) {
          element.image = "./assets/images/" + element.image;
        }
        console.log(element.image);
        this.recipies.push(element as recipe);
      });
    });
  }

  ngAfterViewChecked() {
    console.log("View Recipies was fully loaded");
  }

  //Route to the detail view of a recipe => Show ingredients, cooking time, difficulty, ...
  routeToDetailView(recipe: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        recipe: recipe
      }
    };
    this.router.navigate(["view_recipe_detail"], navigationExtras);
  }
}
