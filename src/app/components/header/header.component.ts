import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productos: Producto[];
  total: number;

  constructor(public usuarioService: UsuarioService, private router: Router) { }



  async ngOnInit() {
    const carritoLocal = JSON.parse(localStorage.getItem('carrito'))
    this.productos = carritoLocal;
    this.total = this.sumarCarrito();
  };

  sumarCantidadProductos() {
    const carritoLocal = JSON.parse(localStorage.getItem('carrito'))
    let resultado = 0;
    if (carritoLocal === null) {
      resultado = 0;
    } else {
      resultado += carritoLocal.length
    }
    return resultado;
  };


  sumarCarrito() {
    let resultado = 0;
    for (let producto of this.productos) {
      resultado += producto.precio;
    }
    return resultado;
  };

  onClick() {
    //boton desconectarse
    /* Swal.fire({
      title: '<strong>Estas por cerrar sesión!</strong>',
      icon: 'info',
      html:
        '<strong>Estás seguro?!</strong>',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    });
    localStorage.removeItem('token') */

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: "Estas por cerrar tu sesión",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Cerrar mi sesión',
      cancelButtonText: 'Continuar en la página',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Tu sesión ha sido cerrada',
          '¡Hasta pronto!',
          'success'
        )
        localStorage.removeItem('token');
        this.router.navigate(['/home'])
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          '¡Seguimos dentro!',
          'error'
        )
      }
    })
  }
};
