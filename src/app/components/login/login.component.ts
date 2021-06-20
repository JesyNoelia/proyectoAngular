import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    const response = await this.usuarioService.login(this.formulario.value);
    if (response['success']) {

      localStorage.setItem('token', response['token']);

      this.router.navigate(['/perfil']);
      this.formulario.reset();

    } else {
      alert('no te has logado');
    }



  }
}
