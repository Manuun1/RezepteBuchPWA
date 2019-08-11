import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IngredientsService } from "src/app/services/ingredients.service";

@Component({
  selector: "app-add-ingredient",
  templateUrl: "./add-ingredient.component.html",
  styleUrls: ["./add-ingredient.component.css"]
})
export class AddIngredientComponent {
  ingredients: any[];
  selected: any;

  constructor(
    public dialogRef: MatDialogRef<AddIngredientComponent>,
    private ingredientService: IngredientsService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.ingredientService
      .get_allIngredients2DArray()
      .subscribe(item => (this.ingredients = item));
    console.log(this.ingredients);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
