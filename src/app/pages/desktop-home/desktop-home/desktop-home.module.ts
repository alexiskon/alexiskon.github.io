import { NgModule } from '@angular/core';
import { DesktopHomeComponent } from './desktop-home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';


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
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [AudioRecordingService]
})
export class DesktopHomeModule { }
