import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-registrar-clientes',
  templateUrl: './registrar-clientes.component.html',
  styleUrls: ['./registrar-clientes.component.css']
})
export class RegistrarClientesComponent implements OnInit {
  
cliente : Client = new Client();

constructor(private clienteService : ClientService, private router:Router){
}

ngOnInit(): void { 
}

guardarCliente(){
  this.clienteService.registrarClientes(this.cliente).subscribe(dato => {
    console.log(dato);
    this.redireccionarListaClientes();
  }, error => console.error());
}

redireccionarListaClientes(){
  this.router.navigate(['/listar-clientes']);
}

onSubmit(){
  this.guardarCliente();
}

SendDataonChange(event: any) {
  console.log(event.target.value);
  }

}
