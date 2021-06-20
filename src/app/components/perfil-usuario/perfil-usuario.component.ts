import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuarios.interface';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  usuario: Usuario;
  productosUsuario: Producto[];

  constructor(private usuarioService: UsuarioService, private productoService: ProductoService) {
  
  }

  async ngOnInit() {
     
    this.usuario= await this.usuarioService.getById()

    this.productosUsuario= await this.productoService.getArticulosByIdUsuario(this.usuario.id);
    console.log(this.productosUsuario);

      if(this.productosUsuario.length === 0){
        console.log('no hay productos');
      } else {
        console.log(this.productosUsuario);
      }
  }

 

}
