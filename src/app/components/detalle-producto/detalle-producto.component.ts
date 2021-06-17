import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  productoId: Producto;

  seleccionado: boolean


  constructor(private productoService: ProductoService, private activatedRoute: ActivatedRoute) {
    this.seleccionado = true;

  }

  ngOnInit(): any {
    this.activatedRoute.params.subscribe(async (params) => {
      this.productoId = await this.productoService.getById(parseInt(params.productoId))
      //console.log(this.productoId);

    });
  };

  async onClick(pProducto: Producto) {
    const res = await this.productoService.addProduct(pProducto);
    this.seleccionado = false;
    //console.log(res);
  };

};
