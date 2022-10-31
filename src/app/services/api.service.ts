import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public jsonTranslate(payload: any) {
    return this.http.post<any>(`http://160.40.52.83:8000/services/translate/json`, payload);
  }

  public textTranslate(payload: any) {
    return this.http.post<any>(`http://160.40.52.83:8000/services/translate/text`, payload);
  }

  public langulageDetectionService(payload: any) {
    return this.http.post<any>(`http://160.40.52.83:8000/services/identify`, payload);
  }

  public speech2text(payload: any) {
    return this.http.post<any>(`http://160.40.52.83:8000/services/speech2text`, payload);
  }

}
