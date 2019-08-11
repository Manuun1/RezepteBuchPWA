import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddIngredientComponent } from '../add-ingredient/add-ingredient.component';
import { IngredientsService } from 'src/app/services/ingredients.service';

@Component({
  selector: 'app-view-ingredients',
  templateUrl: './view-ingredients.component.html',
  styleUrls: ['./view-ingredients.component.css']
})
export class ViewIngredientsComponent implements OnInit {
  panelOpenState = false;
  ingredients:any[];

  constructor(private ingredientsService: IngredientsService,private changedetectorref:ChangeDetectorRef,public dialog: MatDialog) { }

  ngOnInit() {
    this.ingredientsService.get_allIngredients2DArray().subscribe(item => this.ingredients=item);
    console.log(this.ingredients);
  }

  NewIngredient(): void {
    const dialogRef = this.dialog.open(AddIngredientComponent, {
      width: '350px',
      data: {name:"test"}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
