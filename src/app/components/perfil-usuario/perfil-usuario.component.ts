import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuarios.interface';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  usuario: Usuario[];

  constructor() {
    this.usuario = [];
  }

  ngOnInit(): void {
  }

}
