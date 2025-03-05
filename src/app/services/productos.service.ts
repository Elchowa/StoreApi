import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(environment.baseUrl + environment.productos)
  }

}
