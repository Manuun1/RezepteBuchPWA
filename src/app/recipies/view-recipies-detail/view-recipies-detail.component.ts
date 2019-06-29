import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-recipies-detail',
  templateUrl: './view-recipies-detail.component.html',
  styleUrls: ['./view-recipies-detail.component.css']
})
export class ViewRecipiesDetailComponent implements OnInit {

  recipe:any;

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.recipe = this.router.getCurrentNavigation().extras.state.recipe;
    }
  }

  ngOnInit() {
    console.log(this.recipe.name);
  }

  routeBackToDataView() {
    this.router.navigate(["/"]);
  }

}
