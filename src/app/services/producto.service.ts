import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PRODUCTOS } from '../db/productos.db';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private arrProductos: Producto[];
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.arrProductos = PRODUCTOS;
    this.baseUrl = 'http://localhost:3000/api/productos'

  }

  getAll(pLimit = 12, pPage = 1): Promise<Producto[]> {
    return this.httpClient.get<Producto[]>(`${this.baseUrl}`).toPromise();
  }

  getByCategoria(pCategoria: string) {
    const resultado = this.arrProductos.filter(producto => producto.fk_categoria === pCategoria);
    return resultado;

  }

  getById(pId: number) {
    return this.arrProductos.find(producto => producto.id === pId);
  }

  createCart() {

  }

  addProduct(productoId: number) {

  }
  getCart(): Producto[] {
    return []
  }

  getByWord(pWord) {
    const resultado = this.arrProductos.filter(producto => producto.descripcion === pWord || producto.titulo === pWord)
    return resultado;
  }

}
