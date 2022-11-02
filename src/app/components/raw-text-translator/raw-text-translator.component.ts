import { Component, Input, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { ApiService } from 'src/app/services/api.service';
import { AppToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-raw-text-translator',
  templateUrl: './raw-text-translator.component.html',
  styleUrls: ['./raw-text-translator.component.scss']
})
export class RawTextTranslatorComponent implements OnInit {

  @Input('languages') languages: any;

  file: any;
  source_language = 'en';
  target_language: any;

  translationResultToDownloadJson: any;
  translationResultToDownloadText: any;
  rawTextToTranslate: any;
  translationResult: any;

  textDetection: any;
  languageDetectionResult: any;
  textToDetectLanguage: any;

  recorder: any;

  constructor(
    private apiService: ApiService,
    private toastService: AppToastService,
  ) { }

  ngOnInit(): void {
  }


  upload() {
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

  downloadGeneratedTranslations() {
    var blob = new Blob([this.translationResultToDownloadText], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "translation.txt");
  }

}
