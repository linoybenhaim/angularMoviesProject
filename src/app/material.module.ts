import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTabsModule,
  MatTableModule,
  MatSortModule,
  MatInputModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule

 } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    
  ],
  exports:[
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule
    
  ],
  declarations: []
})
export class MaterialModule { }
