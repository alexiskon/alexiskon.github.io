import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AppToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.scss']
})
export class LanguageDetectionComponent implements OnInit {

  textToDetectLanguage: any;
  languageDetectionResult: any;

  constructor(
    private apiService: ApiService,
    private toastService: AppToastService,
  ) {}

  ngOnInit(): void {
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

}
