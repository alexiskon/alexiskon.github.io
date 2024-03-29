import { Component, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faTextHeight } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-desktop-home',
  templateUrl: './desktop-home.component.html',
  styleUrls: ['./desktop-home.component.scss']
})
export class DesktopHomeComponent implements OnInit {

  constructor(
  ) { }

  darkMode$: boolean = false;
  displayDarkModeSwitcher: boolean = true;

  jsonIcon = '{ }';
  faTextHeight = faTextHeight;
  faLanguage = faLanguage;
  faMicrophone = faMicrophone;
  faSun = faSun;
  faMoon = faMoon;

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

  onToggle() {
    if (this.darkMode$) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.body.classList.add('light-theme');
    }
  }

  dialogOpened() {
    this.displayDarkModeSwitcher = false;
  }

  dialogClosed() {
    this.displayDarkModeSwitcher = true;
  }

}
