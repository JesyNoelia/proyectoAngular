import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuarioService: UsuarioService) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.usuarioService.login(this.formulario.value);
    if (response) {
      alert('usuario correcto');
    } else {
      alert('errror');
    }

    // async onSubmit() {
    //   const response = await this.usuarioService.login(this.formulario.value);
    //   if (response['error']) {
    //     //Swal.fire('Error de login', response['error'], 'error');
    //   } else {
    //     //Swal.fire('Login Correcto', 'Ya puedes entrar en la aplicación');
    //     localStorage.setItem('token', response['token']); //aqui estamos guardando el token en localStorage, para cuando lo necesite. localStorage, esta en la consola del navegador -> application -> localStorage -> localhost:4200 
    //   }

    // }

  }
}
