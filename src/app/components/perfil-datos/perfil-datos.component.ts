import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuarios.interface';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil-datos',
  templateUrl: './perfil-datos.component.html',
  styleUrls: ['./perfil-datos.component.css']
})
export class PerfilDatosComponent implements OnInit {
  usuario: Usuario;

  constructor(private usuarioService: UsuarioService) { }

  async ngOnInit() {
    this.usuario = await this.usuarioService.getById()
  }

}
