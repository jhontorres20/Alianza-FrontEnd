import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = "http://localhost:8099/api/alianza/v1/";
  private listadoClientesURL = "client/listClients";
  private registrarClientesURL = "client/saveClient";
  private actualizarEliminarClientesURL = "client";
  private exportListClientesURL = "/exportListClients";
  private busquedaAvanzadaClientesURL = "/searchAdvancedClient";
  

  constructor(private httpClient : HttpClient ) { }

  obtenerListadoClientes (): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseURL+this.listadoClientesURL}`)
  }

  registrarClientes(cliente:Client): Observable<Object>{
    return this.httpClient.post(`${this.baseURL+this.registrarClientesURL}`, cliente)
  }

  actualizarCliente(id:number, cliente:Client):Observable<Object>{
    return this.httpClient.put(`${this.baseURL+this.actualizarEliminarClientesURL}/${id}`, cliente);
  }

  /*consultarClienteId(id:number):Observable<Object>{
    return this.httpClient.get(`${this.baseURL+this.actualizarEliminarClientesURL}/${id}`);
  }*/
  /*consultarClienteId (id:number): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseURL+this.actualizarEliminarClientesURL}/${id}`)
  }*/
  consultarClienteId (id:number): Observable<Client>{
    return this.httpClient.get<Client>(`${this.baseURL+this.actualizarEliminarClientesURL}/${id}`)
  }

  eliminarCliente(id:number):Observable<Client>{
    return this.httpClient.delete<Client>(`${this.baseURL+this.actualizarEliminarClientesURL}/${id}`);
  }

  exportarListadoClientesCSV(): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/csv');  
    return this.httpClient.get(`${this.baseURL+this.actualizarEliminarClientesURL+this.exportListClientesURL}`, {
      headers: headers,
      responseType: 'text'
    });
  }

  busquedaAvanzadaCliente(valorCampo:string):Observable<Client[]>{
    console.log('ejecutandoservicio ')
    let queryParams = new HttpParams();
    queryParams = queryParams.append("searchFields",valorCampo);
    return this.httpClient.get<Client[]>(this.baseURL+this.actualizarEliminarClientesURL+this.busquedaAvanzadaClientesURL,{params:queryParams});
  }

}


