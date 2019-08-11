import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IngredientsService } from "src/app/services/ingredients.service";
import { RecipiesService } from "src/app/services/recipies.service";

@Component({
  selector: "app-add-ingredient",
  templateUrl: "./add-ingredient.component.html",
  styleUrls: ["./add-ingredient.component.css"]
})
export class AddIngredientComponent {
  ingredients: any[];
  units: any[];
  selected: any;

  status_code: string;

  constructor(
    public dialogRef: MatDialogRef<AddIngredientComponent>,
    private ingredientService: IngredientsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    //Gather ingredient Data from the ingredientService
    this.ingredientService
      .get_allIngredients2DArray()
      .subscribe(item => (this.ingredients = item));

    //Gather unit data from the ingredientService
    this.units = this.ingredientService.get_units();
  }

  onYesClick(name: any, unit: any, category: any) {
    //Traverse all ingredient categories
    this.ingredients.forEach(element => {
      //Traverse all ingredients in the respective category
      element.data.forEach(ing => {
        //Check if the ingredient already exists
        if (ing.name.match(name) !== null) {
          this.status_code = "Zutat existiert bereits";
        }
      });
    });
    //If the ingredient exists do not add it!
    if (this.status_code != "Zutat existiert bereits") {
      let response = this.ingredientService.add_ingredient(
        name,
        unit,
        category
      );
      //If the response is true change the status code displayed on the page
      if (response == true) {
        this.status_code = "Zutat hinzugefügt! Bitte Komponente wechseln um anzuzeigen!";
      }
    }
    //refresh data that was modified
    this.ingredientService
      .get_allIngredients2DArray()
      .subscribe(item => (this.ingredients = item));
  }

  //Close the dialog!
  onNoClick(): void {
    this.dialogRef.close();
  }
}
