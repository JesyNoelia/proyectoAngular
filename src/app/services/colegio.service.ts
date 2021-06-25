import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cole } from '../interfaces/colegio.iterface';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ColegioService {


  private baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/colegios'
  }


  buscarCole(): Promise<cole[]> {
    return this.httpClient.get<cole[]>(`${this.baseUrl}/buscar`).toPromise();
  }

  getAllColes(): Promise<cole[]> {
    return this.httpClient.get<cole[]>(`${this.baseUrl}`).toPromise();
  }

  buscarPorPalabra(pPalabra): Promise<cole[]> {
    return this.httpClient.get<cole[]>(`${this.baseUrl}/search/${pPalabra}`).toPromise();
  }

  //http://localhost:3000/api/colegios/articulos/:cole
  getProductosColegio(pColegio): Promise<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseUrl}/articulos/${pColegio}`).toPromise()

  };

  //http://localhost:3000/api/colegios/buscar/5

  getIdCole(pId): Promise<cole> {
    return this.httpClient.get<cole>(`${this.baseUrl}/buscar/${pId}`).toPromise()
  }

}


