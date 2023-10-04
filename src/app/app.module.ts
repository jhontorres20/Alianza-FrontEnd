import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarClientesComponent } from './registrar-clientes/registrar-clientes.component';
import { FormsModule } from '@angular/forms';
import { ActualizarClientesComponent } from './actualizar-clientes/actualizar-clientes.component';
import { DetalleClientesComponent } from './detalle-clientes/detalle-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    RegistrarClientesComponent,
    ActualizarClientesComponent,
    DetalleClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
