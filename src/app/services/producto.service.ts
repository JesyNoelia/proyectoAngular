import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  private baseUrl: string;
  carrito: Producto[];
  item: Producto;


  constructor(private httpClient: HttpClient) {
    this.carrito = [];
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
    return this.httpClient.get<Producto>(`${this.baseUrl}/productos/${pId}`).toPromise();
  }


  //METODO AGREGAR PRODUCTO AL CARRITO
  addProduct(pProducto: Producto) {
    const carritoLocal = JSON.parse(localStorage.getItem('carrito'));

    if (carritoLocal) {
      carritoLocal.push(pProducto)
      localStorage.setItem('carrito', JSON.stringify(carritoLocal));
    } else {
      this.carrito.push(pProducto)
      localStorage.setItem('carrito', JSON.stringify(this.carrito));
    }
  }

  //METODO OBTENER TODO EL CARRITO
  getCart() {
    const carritoLocal = JSON.parse(localStorage.getItem('carrito'))
    const numeropedido = 'pedido_' + Date.now();
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    }



    let result;
    //console.log(carritoLocal)
    for (let producto of carritoLocal) {

      const item = {
        numero_pedido: numeropedido,
        fk_articulo: producto.id
      }

      result = this.httpClient.post<any[]>(`${this.baseUrl}/pedidos`, item, httpOptions).toPromise();
      if (result) {
        this.httpClient.put(`${this.baseUrl}/productos/disponibilidad/${producto.id}`, {
          disponible: 0
        }).toPromise();
      };
    };
    return result;

  };


  //METODO BUSCAR POR PALABRA
  getByWord(pWord) {

    return this.httpClient.get<Producto[]>(`${this.baseUrl}/productos/search/${pWord}`).toPromise();
  }

  //Método productod por Id de Usuario
  //GET http://localhost:3000/api/productos/usuario/6

  //Método productod por Id de Usuario
  //GET http://localhost:3000/api/productos/usuario/



  getArticulosByUsuario() {

    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    }

    return this.httpClient.get<Producto[]>(`${this.baseUrl}/productos/usuario`,
      httpOptions).toPromise();

  }

  create(fd: FormData) {
    const httpOptions = {
      headers: new HttpHeaders({
        authorization: localStorage.getItem('token')
      })
    }
    return this.httpClient.post<Producto>(`${this.baseUrl}/productos`, fd, httpOptions).toPromise();
  }

  checkIdProducto(pIdProducto) {
    if (!localStorage.getItem('carrito')) {
      return false;
    }
    const carritoLocal = JSON.parse(localStorage.getItem('carrito'))
    const resultado = carritoLocal.findIndex((producto) => producto.id === pIdProducto)
    if (resultado !== -1) {
      return true;

    } else {
      return false;

    }
  }
  //METODO CREAR PRODUCTO
  //POST http://localhost:3000/api/productos

  crearProducto(pProducto: Producto) {

    return this.httpClient.post(`${this.baseUrl}/productos`, pProducto).toPromise();
  }



  //Método modificar producto
  ////PUT http://localhost:3000/api/productos/5


  modificarProducto(pId, pProducto) {

    return this.httpClient.put(`${this.baseUrl}/productos/${pId}`, pProducto).toPromise();
  }

}
