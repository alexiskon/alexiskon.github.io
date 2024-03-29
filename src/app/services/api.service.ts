import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  xmlReq = new XMLHttpRequest();

  public jsonTranslate(payload: any) {
    return this.http.post<any>(`${environment.apiUrl}/services/translate/json`, payload);
  }

  public textTranslate(payload: any) {
    return this.http.post<any>(`${environment.apiUrl}/services/translate/text`, payload);
  }

  public langulageDetectionService(payload: any) {
    return this.http.post<any>(`${environment.apiUrl}/services/identify`, payload);
  }

  public speech2text(payload: any) {
    return this.http.post<any>(`${environment.apiUrl}/services/speech2text`, payload);
  }

}