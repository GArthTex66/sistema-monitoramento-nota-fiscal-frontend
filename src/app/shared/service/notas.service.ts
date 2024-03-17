import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  private api: string = 'http://localhost:8080/api/v1/notas-fiscais/';

  private corsHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private http: HttpClient) { }  

  //Falta mudar endpoints para o backend e corrigit imprevistos

  getNotas() {
    return this.http.get<any>(this.api, { headers: this.corsHeaders });
  }

  getNotasPorEstado(estado: string) {
    return this.http.get<any>(`${this.api}estado/${estado}?lastOne=false`, { headers: this.corsHeaders });
  }

  getNotasPorData(data: string) {
    return this.http.get<any>(`${this.api}data?value=${data}`, { headers: this.corsHeaders });
  }

  getNotasFiltradas(field,value){
    return this.http.get<any>(`${this.api}${field}/${value}`, { headers: this.corsHeaders });
  }

  getIndisponibilidade() {
    return this.http.get<any>(`${this.api}unavailable`, { headers: this.corsHeaders });
  }
}
