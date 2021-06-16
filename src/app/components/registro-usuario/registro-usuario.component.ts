import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { cole } from 'src/app/interfaces/colegio.iterface';
import { ColegioService } from 'src/app/services/colegio.service';
import { UsuarioService } from 'src/app/services/usuario.service';

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
      nombre: new FormControl(),
      apellidos: new FormControl(),
      colegio: new FormControl(),
      email: new FormControl(),
      telefono: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    this.colegioService.buscarCole()
      .then(response => {
        this.colegios = response;

      })
      .catch(error => console.log(error))
  }


  async onSubmit() {

    this.formulario.value.colegio = parseInt(this.formulario.value.colegio);

    const response = await this.usuarioService.registro(this.formulario.value);

    if (response) {

      alert('usuario creado');
      this.formulario.reset();

    } else (response['error']); {


    }



  }
}
