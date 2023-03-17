import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvHomeComponent } from './cv-home.component';
import { SharedModule } from 'primeng/api';

const routes: Routes = [
  { path: "",
    component: CvHomeComponent
  }
];

@NgModule({
  declarations: [
    CvHomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CvHomeModule { }
