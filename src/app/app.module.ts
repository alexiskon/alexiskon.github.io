import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { DesktopHomeModule } from './pages/desktop-home/desktop-home/desktop-home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    LoadingBarHttpClientModule,
    HomeModule,
    DesktopHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
