import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-detalle-clientes',
  templateUrl: './detalle-clientes.component.html',
  styleUrls: ['./detalle-clientes.component.css']
})
export class DetalleClientesComponent implements OnInit{
  
  id:number;
  cliente:Client;

  constructor(private route:ActivatedRoute, private clienteService:ClientService){

  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.cliente = new Client;
    this.clienteService.consultarClienteId(this.id).subscribe(dato => {
      this.cliente = dato;
    });


  }

}
