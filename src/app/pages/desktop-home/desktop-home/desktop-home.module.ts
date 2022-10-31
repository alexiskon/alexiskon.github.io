import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopHomeComponent } from './desktop-home.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


const routes: Routes = [
  { path: "",
    component: DesktopHomeComponent,
  }
];

@NgModule({
  declarations: [
    DesktopHomeComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    TooltipModule,
    DialogModule,
    DropdownModule,
    TooltipModule,
    PanelModule,
    InputTextareaModule,
    FormsModule,
    TabViewModule
  ]
})
export class DesktopHomeModule { }
