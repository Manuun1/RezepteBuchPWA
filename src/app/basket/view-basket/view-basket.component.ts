import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort } from "@angular/material";
import { DataService, ingredient_amount_unit } from "src/app/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-view-basket",
  templateUrl: "./view-basket.component.html",
  styleUrls: ["./view-basket.component.css"]
})
export class ViewBasketComponent implements OnInit {
  basket: ingredient_amount_unit[];

  displayedColumns: string[] = ["name","amount", "unit", "category"];
  dataSource:MatTableDataSource<ingredient_amount_unit>;

  @ViewChild("BasketPaginator") paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataservice: DataService, private router: Router) {
    this.basket = this.dataservice.get_allBasketItems();
    this.dataSource = new MatTableDataSource(this.basket);

    console.log(this.basket);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
