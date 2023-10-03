import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit{

client:Client[];

  constructor(private clienteService:ClientService) {}

  ngOnInit(): void {
    /*this.client = [{
      "id": 3,
      "sharedKey": "alozada",
      "businessId": "adriana lozada",
      "email": "aquiloz@gmail.com",
      "phone": "322747896",
      "dataAdded": "2023-10-02T17:33:33.000+00:00"
    },
    {
      "id": 4,
      "sharedKey": "jtquintero",
      "businessId": "jhon christian torres quintero",
      "email": "jhonc1991",
      "phone": "30080614",
      "dataAdded": "2023-08-17T20:33:33.000+00:00"
  }];*/
    this.obtenerClientes();
  }

  private obtenerClientes(){
    this.clienteService.obtenerListadoClientes().subscribe(dato => {
      this.client = dato;
    });
  }

}
