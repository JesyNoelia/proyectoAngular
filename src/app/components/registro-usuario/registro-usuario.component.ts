import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { cole } from 'src/app/interfaces/colegio.iterface';
import { ColegioService } from 'src/app/services/colegio.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  formulario: FormGroup;
  colegios: cole[];

  constructor(private usuarioService: UsuarioService,
    private colegioService: ColegioService) {

    this.colegios = [];

    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('', [Validators.required]),
      colegio: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]),
      telefono: new FormControl(),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]),
    })
  }

  ngOnInit(): void {
    this.colegioService.getAllColes()
      .then(response => {
        this.colegios = response;

      })
      .catch(error => console.log(error))
  }


  // -------> Validadro formulario.

  checkControl(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;

  }


  async onSubmit() {

    this.formulario.value.colegio = parseInt(this.formulario.value.colegio);

    const response = await this.usuarioService.registro(this.formulario.value);

    if (response) {

      Swal.fire('Usuario creado con éxito', '', 'success')
      this.formulario.reset();

    } else (response['error']); {


    }



  }
}
