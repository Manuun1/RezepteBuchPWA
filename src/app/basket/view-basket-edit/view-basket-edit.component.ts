import { Component, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: "app-view-basket-edit",
  templateUrl: "./view-basket-edit.component.html",
  styleUrls: ["./view-basket-edit.component.css"]
})
export class ViewBasketEditComponent {
  constructor(
    public dialogRef: MatDialogRef<ViewBasketEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
