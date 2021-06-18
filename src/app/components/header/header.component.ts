import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productos: Producto[];
  total: number;
  
  constructor(public usuarioService: UsuarioService) { }
  total: number;


  async ngOnInit() {
    const carritoLocal = JSON.parse(localStorage.getItem('carrito'))
    this.productos = carritoLocal;
    this.total = this.sumarCarrito();
  };

  sumarCantidadProductos() {
    const carritoLocal = JSON.parse(localStorage.getItem('carrito'))
    let resultado = 0;
    if (carritoLocal === null) {
      resultado = 0;
    } else {
      resultado += carritoLocal.length
    }
    return resultado;
  };


  sumarCarrito() {
    let resultado = 0;
    for (let producto of this.productos) {
      resultado += producto.precio;
    }
    return resultado;
  };
};
