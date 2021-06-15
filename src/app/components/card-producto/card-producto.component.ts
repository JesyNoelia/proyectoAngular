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

  constructor(private productoService: ProductoService) {

  }

  ngOnInit(): void {
    //console.log(this.producto)
  }

  async onClick(pProducto: Producto) {


    const res = await this.productoService.addProduct(pProducto);

    console.log(res);


  }

};
