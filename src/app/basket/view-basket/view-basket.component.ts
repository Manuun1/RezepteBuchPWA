import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from "@angular/material";
import { DataService, ingredient_amount_unit } from "src/app/data.service";
import { Router } from "@angular/router";
import { ViewBasketEditComponent } from '../view-basket-edit/view-basket-edit.component';

@Component({
  selector: "app-view-basket",
  templateUrl: "./view-basket.component.html",
  styleUrls: ["./view-basket.component.css"]
})
export class ViewBasketComponent implements OnInit {
  basket: ingredient_amount_unit[];

  displayedColumns: string[] = ["name", "amount", "unit", "category", "button"];
  dataSource: MatTableDataSource<ingredient_amount_unit>;

  @ViewChild("BasketPaginator",{static:true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort: MatSort;

  constructor(private dataservice: DataService, private router: Router, private changedetectorref:ChangeDetectorRef,public dialog: MatDialog) {}

  ngOnInit() {
    this.refresh();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteBasketItem(row: any) {
    console.log(row);
    this.dataservice.delete_BasketItem(row.name);
    console.log(this.basket);
    this.dataSource = new MatTableDataSource(this.basket);
    this.refresh();
  }

  editBasketItem(row: any): void {
    const dialogRef = this.dialog.open(ViewBasketEditComponent, {
      width: '350px',
      data: {row}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log("Hallo "+result.row);
    });
  }
  


  refresh(){
    this.dataservice
      .get_allBasketItems()
      .subscribe(item => (this.basket = item));
    this.dataSource = new MatTableDataSource(this.basket);
    this.changedetectorref.detectChanges();
  }
}
