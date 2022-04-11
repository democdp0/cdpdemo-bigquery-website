import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatCardModule, 
    MatTableModule, 
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatIconModule,
    MatGridListModule, 
    MatCardModule,
    MatDialogModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule, 
   MatIconModule, 
   MatCardModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatFormFieldModule,
   MatSelectModule,
   MatTabsModule,
   MatIconModule,
   MatGridListModule, 
   MatCardModule,
   MatDialogModule
   ],
})
export class CustomMaterialModule { }