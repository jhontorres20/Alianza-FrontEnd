import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { RegistrarClientesComponent } from './registrar-clientes/registrar-clientes.component';
import { ActualizarClientesComponent } from './actualizar-clientes/actualizar-clientes.component';
import { DetalleClientesComponent } from './detalle-clientes/detalle-clientes.component';

const routes: Routes = [
  {path: 'listar-clientes', component:ListaClientesComponent},
  {path: '',redirectTo:'listar-clientes', pathMatch:'full'},
  {path: 'registrar-clientes', component:RegistrarClientesComponent},
  {path: 'actualizar-clientes/:id', component:ActualizarClientesComponent},
  {path: 'detalle-clientes/:id', component:DetalleClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
