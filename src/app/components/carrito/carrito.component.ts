import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos: Producto[];
  private baseUrl: string;
  total: number;


  constructor(private productoService: ProductoService, private httpClient: HttpClient, private router: Router, private usuarioService: UsuarioService) {
    this.baseUrl = 'http://localhost:3000/api'
    this.productos = []
  };

  async ngOnInit() {
    const carritoLocal = JSON.parse(localStorage.getItem('carrito'))
    this.productos = carritoLocal;
    this.total = this.sumarCarrito();
  };

  async onClickComprar() {
    if (!this.usuarioService.isLogged()) {
      Swal.fire('Para comprar hay que iniciar sesión');
    } else {
      const carritoLocal = JSON.parse(localStorage.getItem('carrito'))
      const response = await this.productoService.getCart();
      //console.log(response);
      if (response) {
        localStorage.removeItem('carrito');
        Swal.fire('Muchas Gracias por tu compra', '', 'success')
        this.router.navigate(['/productos'])
      };
    }

  };

  onClickVaciar() {
    localStorage.removeItem('carrito');
    /* window.location.reload(); */
    this.productos = [];
    this.total = 0;
  };

  onClickEliminar(pProductoId) {
    console.log(pProductoId)
    const carrito = JSON.parse(localStorage.getItem('carrito'));
    const productosCarrito = carrito.filter(producto => producto.id !== pProductoId.id)

    localStorage.setItem('carrito', JSON.stringify(productosCarrito))
    this.productos = productosCarrito;
    this.total = this.sumarCarrito();
  };

  //SUMAR CARRITO
  sumarCarrito() {
    let resultado = 0;
    for (let producto of this.productos) {
      resultado += producto.precio;
    }
    return resultado;
  };
};
