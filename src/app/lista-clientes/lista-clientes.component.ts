import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit{

client:Client[];
valorCampo:string;

  constructor(private clienteService:ClientService, private router:Router) {  }

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

  actualizarCliente(id:number){
    this.router.navigate(['/actualizar-clientes', id]);
    console.log('actualizar--> '+id)
  }

  eliminarCliente(id:number){
    this.clienteService.eliminarCliente(id).subscribe(dato => {      
      this.obtenerClientes();
    })
  }

  detalleCliente(id:number){
    this.router.navigate(['/detalle-clientes',id]);
  }

  exportarListadoClientes(){   
    this.clienteService.exportarListadoClientesCSV().subscribe(dato => {
      console.log('Exportando listado clientes a CSV');
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(new Blob([dato], {type: 'text/csv'}));
      link.download = 'Listado_Clientes' + '.csv';
      link.click();
    });
  }

  busquedaAvanzada(valorCampo:string){
    this.clienteService.busquedaAvanzadaCliente(valorCampo).subscribe(dato => {      
      this.client = dato;
      console.log('busqueda avanzada finalizada'+dato);
    });
  }

  resetFields(){
    console.log('limpiando valores')    
    location.reload(); 
  }
 

}
