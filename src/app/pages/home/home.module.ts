import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PanelModule } from "primeng/panel";
import { DropdownModule } from 'primeng/dropdown';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TabViewModule} from 'primeng/tabview';
import { RouterModule, Routes } from '@angular/router';
import { JsonTranslatorComponent } from 'src/app/components/json-translator/json-translator.component';
import { RawTextTranslatorComponent } from 'src/app/components/raw-text-translator/raw-text-translator.component';
import { LanguageDetectionComponent } from 'src/app/components/language-detection/language-detection.component';
import { AudioRecorderComponent } from 'src/app/components/audio-recorder/audio-recorder.component';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';

const routes: Routes = [
  { path: "",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    JsonTranslatorComponent,
    RawTextTranslatorComponent,
    LanguageDetectionComponent,
    AudioRecorderComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forChild(routes),
    DropdownModule,
    TooltipModule,
    PanelModule,
    InputTextareaModule,
    FormsModule,
    TabViewModule
  ],
  providers: [AudioRecordingService]
})
export class HomeModule { }
