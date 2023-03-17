import { NgModule } from '@angular/core';
import { CvAboutComponent } from './cv-about.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'primeng/api';

const routes: Routes = [
  { path: "",
    component: CvAboutComponent
  }
];

@NgModule({
  declarations: [CvAboutComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CvAboutModule { }
