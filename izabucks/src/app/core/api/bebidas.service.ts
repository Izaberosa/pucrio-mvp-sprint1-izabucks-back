import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bebida } from 'src/app/shared/models/bebida.model';
@Injectable({
  providedIn: 'root',
})
export class BebidasService {
  url = 'http://127.0.0.1:5000/bebida/';
  constructor(protected http: HttpClient) {}

  getBebidas(): Observable<Bebida> {
    return this.http.get<Bebida>(`${this.url}listas`);
  }

  postBebidas(dadosBebidas: any): Observable<any> {
    return this.http.post<any>(`${this.url}adicionar`, dadosBebidas);
  }
}
