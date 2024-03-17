import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient) { }

  getNotas() {
    return this.http.get<any>('assets/notas-list.json');
  }

  getIndisponibilidade() {
    return this.http.get<any>('assets/estadosIndisponives.json');
  }
}
