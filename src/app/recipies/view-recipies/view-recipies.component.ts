import { Component, OnInit } from "@angular/core";
import { DataService, recipe } from "src/app/data.service";

@Component({
  selector: "app-view-recipies",
  templateUrl: "./view-recipies.component.html",
  styleUrls: ["./view-recipies.component.css"]
})
export class ViewRecipiesComponent implements OnInit {
  
  recipies: recipe[] = [];

  constructor(private dataservice: DataService) {}

  ngOnInit() {
    this.dataservice.get_recipies().subscribe(item => {
      //this.phonebook_entries=[];
      item.forEach(element => {
        //var y = element.payload.toJSON();
        //y["$key"] = element.key;
        this.recipies.push(element as recipe);
        //console.log(y);
      });
    });
  }
}
