import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CvHomeComponent } from './pages/cv/cv-home/cv-home.component';
import { CdAboutComponent } from './pages/cv/cd-about/cd-about.component';
import { CvAboutComponent } from './pages/cv/cv-about/cv-about.component';
import { CvProjectsComponent } from './pages/cv/cv-projects/cv-projects.component';
@NgModule({
  declarations: [
    AppComponent,
    CvHomeComponent,
    CdAboutComponent,
    CvAboutComponent,
    CvProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
