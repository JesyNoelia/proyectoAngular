import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cole } from 'src/app/interfaces/colegio.iterface';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ColegioService } from 'src/app/services/colegio.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos-colegio',
  templateUrl: './productos-colegio.component.html',
  styleUrls: ['./productos-colegio.component.css']
})
export class ProductosColegioComponent implements OnInit {

  @Input() producto: Producto;
  arrProductosCole: Producto[];
  colegio: cole;

  constructor(private colegioService: ColegioService, private activatedRoute: ActivatedRoute, private productoService: ProductoService) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params) => {
      console.log(params.coleId);
      this.arrProductosCole = await this.productoService.getProductosByIdCole(params.coleId)
    });
    this.activatedRoute.params.subscribe(async (params) => {
      this.colegio = (await this.colegioService.getIdCole(params.coleId))[0]
      console.log(this.colegio.nombre);

    });
  };







}
