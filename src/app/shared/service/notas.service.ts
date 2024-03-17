import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient) { }  

  //Falta mudar endpoints para o backend e corrigit imprevistos

  getNotas() {
    return this.http.get<any>('assets/notas-list.json');
  }

  getNotasPorEstado(estado: string) {
    return this.http.get<any>('assets/notas-list.json');
  }

  getNotasPorData(data: string) {
    return this.http.get<any>('assets/notas-list.json');
  }

  getIndisponibilidade() {
    return this.http.get<any>('assets/estadosIndisponives.json');
  }
}
