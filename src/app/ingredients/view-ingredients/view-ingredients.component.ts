import { Component, OnInit } from '@angular/core';
import { DataService, ingredient } from 'src/app/data.service';

@Component({
  selector: 'app-view-ingredients',
  templateUrl: './view-ingredients.component.html',
  styleUrls: ['./view-ingredients.component.css']
})
export class ViewIngredientsComponent implements OnInit {
  panelOpenState = false;
  ingredients:any[];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.get_allIngredients().subscribe(item => this.ingredients=item);
    console.log(this.ingredients);
  }

}
