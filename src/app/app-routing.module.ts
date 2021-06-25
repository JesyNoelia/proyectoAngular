import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoPerfilComponent } from './components/carrito-perfil/carrito-perfil.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { ErrorComponent } from './components/error/error.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';
import { HomeComponent } from './components/home/home.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { LoginComponent } from './components/login/login.component';
import { MapaColesComponent } from './components/mapa-coles/mapa-coles.component';
import { ModificarProductoComponent } from './components/modificar-producto/modificar-producto.component';
import { PerfilDatosComponent } from './components/perfil-datos/perfil-datos.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { ProductosColegioComponent } from './components/productos-colegio/productos-colegio.component';
import { ProductosUsuarioComponent } from './components/productos-usuario/productos-usuario.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { PerfilGuard } from './perfil.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'detalle/:productoId', component: DetalleProductoComponent },
  { path: 'form', component: FormularioProductoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroUsuarioComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'mapas', component: MapaColesComponent },
  {
    path: 'perfil', component: PerfilUsuarioComponent, children: [
      { path: 'productos', component: ProductosUsuarioComponent },
      { path: 'datos', component: PerfilDatosComponent, canActivate: [PerfilGuard] },
      { path: 'carrito', component: CarritoPerfilComponent },
      { path: 'favoritos', component: FavoritosComponent }
    ]
  },
  { path: 'equipo', component: ConocenosComponent },
  { path: 'modificar/:productoId', component: ModificarProductoComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'productos/colegio/:coleId', component: ProductosColegioComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
