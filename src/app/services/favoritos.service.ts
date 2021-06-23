import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private baseUrl: string;
  favorito: Producto[];
  item: Producto;

  constructor(private httpClient: HttpClient) {
    this.favorito = [];
    this.baseUrl = 'http://localhost:3000/api/favoritos'
  }


  //METODO AGREGAR PRODUCTO A FAVORITOS
  addProductFavorito(pProducto: Producto) {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    }
    const item = {
      fk_articulo: pProducto.id
    }
    const result = this.httpClient.post(`${this.baseUrl}`, item, httpOptions).toPromise();
    console.log(result);

    return result;
  }

  //OBTENER TODOS LOS FAVORITOS POR ID DE USUARIO
  getAllFavoritos() {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    };
    return this.httpClient.get<Producto[]>(`${this.baseUrl}`, httpOptions).toPromise();
  }
}
