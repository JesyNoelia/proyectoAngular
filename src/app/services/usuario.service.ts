import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../interfaces/login.interface';
import { Usuario } from '../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuarios/';
  }


  //POST http://localhost:3000/api/usuarios/registro

  registro(pUsuario: Usuario) {

    return this.httpClient.post(`${this.baseUrl}registro`, pUsuario).toPromise();
  }

  //POST http://localhost:3000/api/usuarios/login

  login(pLogin: login) {
    return this.httpClient.post(`${this.baseUrl}login`, pLogin).toPromise();
  }



}

