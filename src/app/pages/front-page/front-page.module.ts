import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPageComponent } from './front-page/front-page.component';
import {AppRoutingModule} from "../../app-routing.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [FrontPageComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule
  ]
})
export class FrontPageModule { }
