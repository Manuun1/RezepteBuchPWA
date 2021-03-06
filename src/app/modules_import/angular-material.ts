import { NgModule } from "@angular/core";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatChipsModule } from "@angular/material/chips";
import { MatDialogModule } from "@angular/material/dialog";
import { MatStepperModule } from "@angular/material/stepper";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatPaginatorModule } from "@angular/material";
import { MatBadgeModule } from "@angular/material/badge";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatChipsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatSidenavModule,
    MatChipsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatExpansionModule
  ]
})
export class angular_material {}
