import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService, ingredient } from 'src/app/data.service';
import { MatDialog } from '@angular/material';
import { AddIngredientComponent } from '../add-ingredient/add-ingredient.component';

@Component({
  selector: 'app-view-ingredients',
  templateUrl: './view-ingredients.component.html',
  styleUrls: ['./view-ingredients.component.css']
})
export class ViewIngredientsComponent implements OnInit {
  panelOpenState = false;
  ingredients:any[];

  constructor(private dataservice: DataService,private changedetectorref:ChangeDetectorRef,public dialog: MatDialog) { }

  ngOnInit() {
    this.dataservice.get_allIngredients2DArray().subscribe(item => this.ingredients=item);
    console.log(this.ingredients);
  }

  NewIngredient(): void {
    const dialogRef = this.dialog.open(AddIngredientComponent, {
      width: '350px',
      data: {name:"test"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log("Hallo "+result.row);
    });
  }

}
