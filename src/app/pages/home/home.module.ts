import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: "",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [AudioRecordingService]
})
export class HomeModule { }
