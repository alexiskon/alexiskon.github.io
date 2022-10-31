import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PanelModule } from "primeng/panel";
import { DropdownModule } from 'primeng/dropdown';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    TooltipModule,
    PanelModule,
    InputTextareaModule,
    FormsModule,
    TabViewModule
  ]
})
export class HomeModule { }
