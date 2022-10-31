import { Component, OnInit } from '@angular/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faTextHeight } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/services/api.service';
import { AppToastService } from 'src/app/services/toast.service';
import exportFromJSON from 'export-from-json'
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-desktop-home',
  templateUrl: './desktop-home.component.html',
  styleUrls: ['./desktop-home.component.scss']
})
export class DesktopHomeComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private toastService: AppToastService
  ) { }

  jsonIcon = '{ }';
  faTextHeight = faTextHeight;
  faLanguage = faLanguage;

  displayJsonFormatDialog: boolean = false;
  displayRawTextDialog: boolean = false;
  displayLanguageDetectionDialog: boolean = false;

  languages = [
    {value: 'el', name: 'Greek'},
    {value: 'fr', name: 'French'},
    {value: 'es', name: 'Spanish'},
    {value: 'de', name: 'German'}
  ]

  file: any;
  source_language = 'en';
  target_language: any;
  tabActiveIndex: number = 0;

  translationResultToDownloadJson: any;
  translationResultToDownloadText: any;
  rawTextToTranslate: any;
  translationResult: any;

  textDetection: any;
  languageDetectionResult: any;
  textToDetectLanguage: any;

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

  handleTabChange(event: any) {
    this.tabActiveIndex = event.index;
  }

  onFileChange(event: any) {
    let file = event.target.files[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function(x) {
      self.file = fileReader.result;
    }
    fileReader.readAsText(file);
    fileReader.onerror = function () {
      self.toastService.errorMessage(`Please check the files 's format`);
    }
  }

  upload() {
    if (this.tabActiveIndex === 0) {
      try {
        let payload = {
          source_language: this.source_language,
          target_language: this.target_language,
          translate: JSON.parse(this.file)
        }
        if ( this.file ) {
          this.apiService.jsonTranslate(payload).subscribe((res: any) => {
            if (res.translations) {
              this.translationResultToDownloadJson = res.translations;
              this.toastService.successMessage('Uploaded sucessfully.')
            } else {
              this.toastService.errorMessage(res[0])
            }
            
          })
        }
      } catch (e) {
        console.log(e);
        this.toastService.errorMessage(`Please check the files 's format`);
      }
    } else {
      try {
        let payload = {
          source_language: this.source_language,
          target_language: this.target_language,
          translate: this.rawTextToTranslate
        }
        if ( this.rawTextToTranslate ) {
          this.apiService.textTranslate(payload).subscribe((res: any) => {
            if (res.translations) {
              console.log(res);
              this.translationResultToDownloadText = res.translations;
              this.toastService.successMessage('Uploaded sucessfully.')
            } else {
              this.toastService.errorMessage(res[0])
            }
            
          })
        }
      } catch (e) {
        console.log(e);
        this.toastService.errorMessage(`Something went wrong.`);
      }
    }
  }

  textLanguageDetection() {
    try {
      let payload = {
        identify: this.textToDetectLanguage
      }
      this.apiService.langulageDetectionService(payload).subscribe((res: any) => {
        this.languageDetectionResult = res.language;
      })
    } catch(e) {
      console.log(e);
      this.toastService.errorMessage(`Something went wrong.`);
    }
  }

  downloadGeneratedTranslations() {
    let data: any;
    if ( this.tabActiveIndex === 0) {
      data = this.translationResultToDownloadJson;
      const fileName = 'download'
      const exportType = 'json'
      exportFromJSON({ data, fileName, exportType })
    } else {
      var blob = new Blob([this.translationResultToDownloadText], {type: "text/plain;charset=utf-8"});
      FileSaver.saveAs(blob, "translation.txt");
    }
  }

}
