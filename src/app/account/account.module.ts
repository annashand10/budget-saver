import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountComponent} from "./account.component";
import {MaterialModule} from "../material/material.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
