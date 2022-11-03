import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AppToastService } from 'src/app/services/toast.service';
import exportFromJSON from 'export-from-json'


@Component({
  selector: 'app-json-translator',
  templateUrl: './json-translator.component.html',
  styleUrls: ['./json-translator.component.scss']
})
export class JsonTranslatorComponent implements OnInit {

  @Input('languages') languages: any;

  file: any;
  source_language = 'en';
  target_language: any;
  translationResultToDownloadJson: any;

  constructor(
    private apiService: ApiService,
    private toastService: AppToastService,
  ) { }

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    let file = event.target.files[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function (x) {
      self.file = fileReader.result;
    }
    fileReader.readAsText(file);
    fileReader.onerror = function () {
      self.toastService.errorMessage(`Please check the files 's format`);
    }
    
  }

  upload() {
    try {
      let payload = {
        source_language: this.source_language,
        target_language: this.target_language,
        translate: JSON.parse(this.file)
      }
      if (this.file) {
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
  }
  downloadGeneratedTranslations() {
    let data: any;
    data = this.translationResultToDownloadJson;
    const fileName = 'download'
    const exportType = 'json'
    exportFromJSON({ data, fileName, exportType })
  }
  
}
