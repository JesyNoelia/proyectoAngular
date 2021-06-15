import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos: Producto[];
  private baseUrl: string;


  constructor(private productoService: ProductoService, private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/pedidos'
    this.productos = []
  }

  async ngOnInit() {
    this.productos = await this.productoService.getAll();
  }

  async onClickComprar() {

    //const carritoLocal = JSON.parse(localStorage.getItem('carrito'))
    //return this.httpClient.post(`${this.baseUrl}`).toPromise();
    const response = await this.productoService.getCart();
    console.log(response);
    const vaciarCarrito = await this.productoService.clearCart();

  }
  onClickVaciar() {
    this.productoService.clearCart();

  }

  onClickEliminar(pProducto) {

  }

}
