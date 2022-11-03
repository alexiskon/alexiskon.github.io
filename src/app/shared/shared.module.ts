import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { AudioRecorderComponent } from 'src/app/components/audio-recorder/audio-recorder.component';
import { JsonTranslatorComponent } from 'src/app/components/json-translator/json-translator.component';
import { LanguageDetectionComponent } from 'src/app/components/language-detection/language-detection.component';
import { RawTextTranslatorComponent } from 'src/app/components/raw-text-translator/raw-text-translator.component';


@NgModule({
  declarations: [
    AudioRecorderComponent,
    JsonTranslatorComponent,
    LanguageDetectionComponent,
    RawTextTranslatorComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TooltipModule,
    DialogModule,
    DropdownModule,
    TooltipModule,
    PanelModule,
    InputTextareaModule,
    FormsModule,
    TabViewModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    TooltipModule,
    DialogModule,
    DropdownModule,
    TooltipModule,
    PanelModule,
    InputTextareaModule,
    FormsModule,
    TabViewModule,
    CommonModule,
    InputTextModule,
    ButtonModule,
    AudioRecorderComponent,
    JsonTranslatorComponent,
    LanguageDetectionComponent,
    RawTextTranslatorComponent
  ]
})
export class SharedModule { }
