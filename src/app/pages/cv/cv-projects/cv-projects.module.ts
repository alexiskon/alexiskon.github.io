import { NgModule } from '@angular/core';
import { CvProjectsComponent } from './cv-projects.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'primeng/api';

const routes: Routes = [
  { path: "",
    component: CvProjectsComponent
  }
];

@NgModule({
  declarations: [
    CvProjectsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CvProjectsModule { }
