import { Injectable } from '@angular/core';
import { PRODUCTOS } from '../db/productos.db';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private arrProductos: Producto[];

  constructor() {
    this.arrProductos = PRODUCTOS

  }

  getAll() {
    return this.arrProductos
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
  getCart() {

  }

  getByWord(pWord) {
    const resultado = this.arrProductos.filter(producto => producto.descripcion === pWord || producto.titulo === pWord)
    return resultado;
  }

}
