import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productos: Producto[]

  constructor(private productoService: ProductoService) {
    this.productos = []
  }

  ngOnInit() {
    this.productos = this.productoService.getCart();
  }

}
