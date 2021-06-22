import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

  ModificarProducto: Producto;
  producto: Producto;
  formulario: FormGroup;

  constructor(private productoService: ProductoService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      this.producto = await this.productoService.getById(parseInt(params.productoId));
      console.log(this.producto);
      this.formulario = new FormGroup({
        titulo: new FormControl(this.producto.titulo),
        categoria: new FormControl(this.producto.fk_categoria),
        descripcion: new FormControl(this.producto.descripcion),
        // imagen: new FormControl(this.producto.imagen),
        precio: new FormControl(this.producto.precio),
        talla: new FormControl(this.producto.talla),
      });

    })
  }

  async onSubmit() {
    //console.log(this.formulario.value);
    const resultado = await this.productoService.modificarProducto(this.producto.id, this.formulario.value);
    console.log(resultado);
  }




}
