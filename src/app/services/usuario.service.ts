import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../interfaces/login.interface';
import { Producto } from '../interfaces/producto.interface';
import { Usuario } from '../interfaces/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/usuarios';
  }



  // getAll(): Promise<Producto[]> {
  //   //esto es necesario para que te permita ver todos, porque ahora con el token va a dejar
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       authorization: localStorage.getItem('token')
  //     }) //tengo que pasarle al return esta const 
  //   }
  //   //
  //   return this.httpClient.get<Producto[]>(`${this.baseUrl}/perfil`, httpOptions).toPromise();
  // }



  //POST http://localhost:3000/api/usuarios/registro

  registro(pUsuario: Usuario) {

    return this.httpClient.post(`${this.baseUrl}/registro`, pUsuario).toPromise();
  }

  //POST http://localhost:3000/api/usuarios/login

  login(pLogin: login) {
    return this.httpClient.post(`${this.baseUrl}/login`, pLogin).toPromise();
  }


//Metodo que ejecutamos para saber si estamos logados -> comprueba a partir del token en LocalStorage
  isLogged(){
    if (localStorage.getItem("token") === null) {
      return false;
    }else {
      return true;
    }
  }



 //METODO BUSCAR USUARIO POR ID
 //GET http://localhost:3000/api/usuarios/perfil


  getById(): any{

    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    }
    return this.httpClient.get<Usuario>(`${this.baseUrl}perfil`, httpOptions).toPromise();
  
  }


}

