import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cole } from '../interfaces/colegio.iterface';

@Injectable({
  providedIn: 'root'
})
export class ColegioService {


  private baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/colegios/'
  }


  buscarCole(): Promise<cole[]> {
    return this.httpClient.get<cole[]>(`${this.baseUrl}buscar`).toPromise();
  }


}


