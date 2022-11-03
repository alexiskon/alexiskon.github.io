import { Component, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faTextHeight } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-desktop-home',
  templateUrl: './desktop-home.component.html',
  styleUrls: ['./desktop-home.component.scss']
})
export class DesktopHomeComponent implements OnInit {

  constructor(
  ) { }

  jsonIcon = '{ }';
  faTextHeight = faTextHeight;
  faLanguage = faLanguage;
  faMicrophone = faMicrophone;

  displayJsonFormatDialog: boolean = false;
  displayRawTextDialog: boolean = false;
  displayLanguageDetectionDialog: boolean = false;
  displayAudioRecordingDialog: boolean = false;

  languages = [
    {value: 'el', name: 'Greek'},
    {value: 'fr', name: 'French'},
    {value: 'es', name: 'Spanish'},
    {value: 'de', name: 'German'}
  ]

  ngOnInit(): void {
  }

  jsonFormatDialog() {
    this.displayJsonFormatDialog = !this.displayJsonFormatDialog;
  }

  rawTextDialog() {
    this.displayRawTextDialog = !this.displayRawTextDialog;
  }

  languageDetectionDialog() {
    this.displayLanguageDetectionDialog = !this.displayLanguageDetectionDialog;
  }

  audioRecordingDialog() {
    this.displayAudioRecordingDialog = !this.displayAudioRecordingDialog;
  }

}
