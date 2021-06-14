import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MapaColesComponent } from './components/mapa-coles/mapa-coles.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: CardProductoComponent },
  { path: 'form', component: FormularioProductoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroUsuarioComponent },
  { path: 'mapas', component: MapaColesComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
