import { HttpClient } from '@angular/common/http';
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

    /* const item = {
      fk_usuario: 5,
      fk_articulo: producto.id
    }
    const result = this.httpClient.post(`${this.baseUrl}`, item).toPromise */
  }
}
