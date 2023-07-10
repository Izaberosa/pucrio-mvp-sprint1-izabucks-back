import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BebidasService {
  url = 'http://127.0.0.1:5000/bebida/listas';
  constructor(protected http: HttpClient) {}

  getBebidas(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
