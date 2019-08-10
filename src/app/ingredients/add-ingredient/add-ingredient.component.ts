import { Component, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { DataService } from 'src/app/data.service';

@Component({
  selector: "app-add-ingredient",
  templateUrl: "./add-ingredient.component.html",
  styleUrls: ["./add-ingredient.component.css"]
})
export class AddIngredientComponent {

  ingredients:any[];
  selected:any;

  constructor(
    public dialogRef: MatDialogRef<AddIngredientComponent>,private dataservice: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any) 
    {
      this.dataservice.get_allIngredients2DArray().subscribe(item => this.ingredients=item)
      console.log(this.ingredients);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
