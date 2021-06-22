import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { cole } from 'src/app/interfaces/colegio.iterface';
import { ColegioService } from 'src/app/services/colegio.service';
import { Categoria } from 'src/app/interfaces/categoria.interface';
import { CategoriasService } from 'src/app/services/categorias.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {

  formulario: FormGroup;
  files;
  colegios: cole[];
  categorias: Categoria[];

  constructor(private productoService: ProductoService, private router: Router, private colegioService: ColegioService, private categoriaService: CategoriasService) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [Validators.required, Validators.minLength(3)]),
      categoria: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),
      colegio: new FormControl('', [Validators.required]),
      curso: new FormControl(),
      talla: new FormControl()
    })
    this.colegios = [];
    this.categorias = [];
  }

  ngOnInit(): void {
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
  };

  checkControl(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;

  }

  onSubmit() {
    // Creación del objeto donde incluimos todos los campos del formulario y además la imagen
    let fd = new FormData();

    fd.append('titulo', this.formulario.value.titulo);
    fd.append('fk_categoria', this.formulario.value.categoria);
    fd.append('fk_colegio', this.formulario.value.colegio);
    fd.append('descripcion', this.formulario.value.descripcion);
    fd.append('precio', this.formulario.value.precio);
    fd.append('estado', this.formulario.value.estado);
    fd.append('imagen', this.files[0]);
    fd.append('curso', this.formulario.value.curso)
    fd.append('talla', this.formulario.value.talla);



    // Delegamos el envío del formulario en el servicios
    this.productoService.create(fd).then(result => {
      this.router.navigate(['/productos']);
      Swal.fire('Has ingresado un nuevo articulo, ya puedes verlo en tu perfil', '', 'success')
    })
  }

  onChange($event) {
    this.files = $event.target.files;
  }

}
