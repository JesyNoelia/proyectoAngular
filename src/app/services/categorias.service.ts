import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  private baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/categorias'
  }

  buscarCategoria(): Promise<Categoria[]> {
    return this.httpClient.get<Categoria[]>(`${this.baseUrl}/buscar`).toPromise();
  }
}
