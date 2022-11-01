import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public jsonTranslate(payload: any) {
    return this.http.post<any>(`${environment}/services/translate/json`, payload);
  }

  public textTranslate(payload: any) {
    return this.http.post<any>(`${environment}/services/translate/text`, payload);
  }

  public langulageDetectionService(payload: any) {
    return this.http.post<any>(`${environment}/services/identify`, payload);
  }

  public speech2text(payload: any) {
    return this.http.post<any>(`${environment}/services/speech2text`, payload);
  }

}
