import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { cole } from 'src/app/interfaces/colegio.iterface';
import { Producto } from 'src/app/interfaces/producto.interface';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ColegioService } from 'src/app/services/colegio.service';
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
  categorias: Categoria[];
  colegios: cole[];

  constructor(private productoService: ProductoService, private activatedRoute: ActivatedRoute, private colegioService: ColegioService, private categoriaService: CategoriasService, private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      this.producto = await this.productoService.getById(parseInt(params.productoId));
      console.log(this.producto);
      this.formulario = new FormGroup({
        titulo: new FormControl(this.producto.titulo, [Validators.required, Validators.minLength(3)]),
        fk_categoria: new FormControl(this.producto.fk_categoria, [Validators.required]),
        descripcion: new FormControl(this.producto.descripcion, [Validators.required]),
        estado: new FormControl(this.producto.estado, [Validators.required]),
        fk_colegio: new FormControl(this.producto.fk_colegio, [Validators.required]),
        precio: new FormControl(this.producto.precio, [Validators.required]),
        curso: new FormControl(this.producto.curso),
        talla: new FormControl(this.producto.talla),
      });
      this.categorias = [];
      this.colegios = [];

    });

    this.colegioService.buscarCole()
      .then(response => {
        this.colegios = response;
      })
      .catch(error => console.log(error));

    this.categoriaService.buscarCategoria()
      .then(response => {
        this.categorias = response
      })
      .catch(error => console.log(error))
  }

  checkControl(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;

  }

  async onSubmit() {
    //console.log(this.formulario.value);
    const resultado = await this.productoService.modificarProducto(this.producto.id, this.formulario.value);
    console.log(resultado);

    if (resultado) {
      alert('producto modificado');
      this.router.navigate(['/perfil']);
    } else (resultado['producto no modificado']);

  }




}
