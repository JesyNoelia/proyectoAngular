import { Component, Input, OnInit } from '@angular/core';

import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {

  @Input() producto: Producto;

  seleccionado: boolean;
  @Input() carritoVisible: boolean;
  @Input() modificarVisible: boolean;


  constructor(private productoService: ProductoService) {
    this.seleccionado = true;
    this.carritoVisible = true;
    this.modificarVisible = false;

  }

  ngOnInit(): void {
    //console.log(this.producto)
  }

  async onClick(pProducto: Producto) {

    //console.log(res);
    if (this.productoService.checkIdProducto(pProducto.id)) {
      alert('El producto ya se encuentra en el carrito')
    } else {
      const res = await this.productoService.addProduct(pProducto);
      this.seleccionado = false;
    }

  };

  onClickFavorito(pProducto: Producto) {

  }
};
