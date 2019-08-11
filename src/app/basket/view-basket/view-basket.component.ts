import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import {
  MatTableDataSource,
  MatPaginator,
  MatSort,
  MatDialog
} from "@angular/material";
import { Router } from "@angular/router";
import { ViewBasketEditComponent } from "../view-basket-edit/view-basket-edit.component";
import { BasketService } from "src/app/services/basket.service";
import {
  ingredient_amount_unit,
  IngredientsService
} from "src/app/services/ingredients.service";

@Component({
  selector: "app-view-basket",
  templateUrl: "./view-basket.component.html",
  styleUrls: ["./view-basket.component.css"]
})
export class ViewBasketComponent implements OnInit {
  basket: ingredient_amount_unit[];
  ingredients: any[];
  units: any[];

  status_code = "";

  displayedColumns: string[] = ["name", "amount", "unit", "category", "button"];
  dataSource: MatTableDataSource<ingredient_amount_unit>;

  @ViewChild("BasketPaginator", { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private basketService: BasketService,
    private ingredientService: IngredientsService,
    private router: Router,
    private changedetectorref: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    //execute the refresh function on startup
    this.refresh();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    //Import units from Dataservice
    this.units = this.ingredientService.get_units();
  }

  //Apply the filter to the Material Table
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteBasketItem(row: any) {
    //Hand Over Data to the basketData Service
    this.basketService.delete_BasketItem(row.name);
    this.dataSource = new MatTableDataSource(this.basket);
    //Execute refresh to get the new data
    this.refresh();
  }

  editBasketItem(row: any): void {
    //Open the Material Dialog for edition the item amount
    const dialogRef = this.dialog.open(ViewBasketEditComponent, {
      width: "350px",
      data: { row }
    });
  }

  refresh() {
    //get the refreshed data from the basketService
    this.basketService
      .get_allBasketItems()
      .subscribe(item => (this.basket = item));
    //Apply the grabbed data to the Material Table
    this.dataSource = new MatTableDataSource(this.basket);
    this.changedetectorref.detectChanges();
  }

  addCustomItem(name: string, amount: number) {
    //Send data to the data service to add custom entries to the basket
    this.basketService.customItem_addToBasket(name,amount);
    this.status_code = "Artikel hinzugefügt! Bitte Komponente Wechseln um einzublenden.";
  }
}
