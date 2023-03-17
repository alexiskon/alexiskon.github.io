import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: "desktop", loadChildren: () => import("./../app/pages/home/home.module").then(m => m.HomeModule) },
    // { path: "", loadChildren: () => import("./../app/pages/desktop-home/desktop-home/desktop-home.module").then(m => m.DesktopHomeModule),
    { path: "", loadChildren: () => import("./../app/pages/cv/cv-home/cv-home.module").then(m => m.CvHomeModule)},
    { path: "projects", loadChildren: () => import("./../app/pages/cv/cv-projects/cv-projects.module").then(m => m.CvProjectsModule)},
    { path: "about", loadChildren: () => import("./../app/pages/cv/cv-about/cv-about.module").then(m => m.CvAboutModule)}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
