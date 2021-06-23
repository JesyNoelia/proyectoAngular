import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { Usuario } from 'src/app/interfaces/usuarios.interface';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { ProductoService } from 'src/app/services/producto.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  usuario: Usuario;
  favoritosUsuario: Producto[];
  seleccionado: boolean;
  productoId: Producto;



  constructor(private favoritosService: FavoritosService, private usuarioService: UsuarioService, private productoService: ProductoService) {
    this.seleccionado = true;
    this.favoritosUsuario = [];
  }

  async ngOnInit() {
    this.usuario = await this.usuarioService.getById();

    this.favoritosUsuario = await this.favoritosService.getAllFavoritos();
    console.log(this.favoritosUsuario);


    if (this.favoritosUsuario.length === 0) {
      console.log('No hay productos Favoritos');
    } else {
      console.log(this.favoritosUsuario);
    };
  };

  async onClick(pProducto: Producto) {
    if (this.productoService.checkIdProducto(pProducto.id)) {
      alert('El producto ya se encuentra en el carrito')
    } else {
      const res = await this.productoService.addProduct(pProducto);
      this.seleccionado = false;
    };
  };


  generarArrBucle() {
    if (this.favoritosUsuario.length === 0) {

      return [];
    } else {
      const arrBucle = Array(Math.ceil(this.favoritosUsuario.length / 3)).fill(1)
      console.log(arrBucle);
      return arrBucle;
    };
  };
};
