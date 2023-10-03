import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = "http://localhost:8099/api/alianza/v1/client/listClients";

  constructor(private httpClient : HttpClient ) { }

  obtenerListadoClientes (): Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseURL}`)
  }


}
