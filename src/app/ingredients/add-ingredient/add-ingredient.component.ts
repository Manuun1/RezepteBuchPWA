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
    this.ingredientService
      .get_allIngredients2DArray()
      .subscribe(item => (this.ingredients = item));

    this.units = this.ingredientService.get_units();
  }

  onYesClick(name: any, unit: any, category: any) {
    this.ingredients.forEach(element => {
      element.data.forEach(ing => {
        if (/*ing.name == name*/ ing.name.match(name) !== null) {
          this.status_code = "Ingredient already exists";
        }
      });
    });

    if (this.status_code != "Ingredient already exists") {
      let response = this.ingredientService.add_ingredient(
        name,
        unit,
        category
      );

      if (response == true) {
        this.status_code = "Ingredient successfully added!";
      }
    }
    this.ingredientService
      .get_allIngredients2DArray()
      .subscribe(item => (this.ingredients = item));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
