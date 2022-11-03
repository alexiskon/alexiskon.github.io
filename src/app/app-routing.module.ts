import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: "", loadChildren: () => import("./../app/pages/home/home.module").then(m => m.HomeModule) },
    { path: "desktop", loadChildren: () => import("./../app/pages/desktop-home/desktop-home/desktop-home.module").then(m => m.DesktopHomeModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
