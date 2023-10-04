import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  swal  from 'sweetalert2';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-actualizar-clientes',
  templateUrl: './actualizar-clientes.component.html',
  styleUrls: ['./actualizar-clientes.component.css']
})
export class ActualizarClientesComponent {

  id:number;
  cliente:Client = new Client();

  constructor(private clienteService:ClientService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteService.consultarClienteId(this.id).subscribe(dato =>{
      this.cliente = dato;
    },error => console.log(error));
  }

  redireccionarListaClientes(){
    this.router.navigate(['/listar-clientes']);
    swal.fire('Cliente actualizado',`El cliente ${this.cliente.businessId} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    this.clienteService.actualizarCliente(this.id,this.cliente).subscribe(dato => {
      this.redireccionarListaClientes();
    },error => console.log(error));
  }

  
  

}
