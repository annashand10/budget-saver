import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from "./table.component";
import {MaterialModule} from "../../material/material.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [TableComponent],
  exports: [TableComponent]
})
export class TableModule { }
