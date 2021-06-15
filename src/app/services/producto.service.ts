import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PRODUCTOS } from '../db/productos.db';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private arrProductos: Producto[];
  private baseUrl: string;
  carrito: Producto[];
  item: Producto;

  constructor(private httpClient: HttpClient) {
    this.carrito = [];

    this.arrProductos = PRODUCTOS;
    this.baseUrl = 'http://localhost:3000/api'

  }

  //METODO OBTENER TODOS LOS PRODUCTOS
  getAll(pPage = 1, pLimit = 12): Promise<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseUrl}/productos?limit=${pLimit}&page=${pPage}`).toPromise();
  }

  //METODO BUSCAR POR CATEGORIA
  getByCategoria(pCategoria: string): Promise<Producto[]> {
    //const resultado = this.arrProductos.filter(producto => producto.fk_categoria === pCategoria);
    return this.httpClient.get<Producto[]>(`${this.baseUrl}/productos/categorias/${pCategoria}`).toPromise();

  }

  //METODO BUSCAR POR ID
  getById(pId: number) {
    return this.httpClient.get<Producto[]>(`${this.baseUrl}/productos/${pId}`).toPromise();
  }


  //METODO AGREGAR PRODUCTO AL CARRITO
  addProduct(pProducto: Producto) {
    const carritoLocal = JSON.parse(localStorage.getItem('carrito'));
    if (carritoLocal) {
      carritoLocal.push(pProducto)
      localStorage.setItem('carrito', JSON.stringify(carritoLocal));
    } else {
      this.carrito.push(pProducto)
      //console.log(this.carrito);
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }

  }

  //METODO OBTENER TODO EL CARRITO
  getCart() {
    const carritoLocal = JSON.parse(localStorage.getItem('carrito'))
    const pedido = [];
    for (let producto of carritoLocal) {
      const item = {
        fk_usuario: 5,
        fk_articulo: producto.id
      }
      pedido.push(item);
    }
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })

    }

    return this.httpClient.post<any[]>(`${this.baseUrl}/pedidos`, pedido, httpOptions).toPromise();
  }

  //METODO PARA VACIAR EL CARRITO
  clearCart() {
    const carritoLocal = localStorage.clear();
  }

  //METODO BUSCAR POR PALABRA
  getByWord(pWord) {

    return this.httpClient.get<Producto[]>(`${this.baseUrl}/productos/search/${pWord}`).toPromise();
  }

}
