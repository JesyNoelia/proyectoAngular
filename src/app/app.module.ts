import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormularioProductoComponent } from './components/formulario-producto/formulario-producto.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { MapaColesComponent } from './components/mapa-coles/mapa-coles.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    RegistroUsuarioComponent,
    HomeComponent,
    LoginComponent,
    ContactoComponent,
    FormularioProductoComponent,
    CardProductoComponent,
    CardHomeComponent,
    MapaColesComponent,
    PerfilUsuarioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
