import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatospersonalesService {

  private storageKey = 'datosUsuario';

  constructor() { }

  add(datos: any): void {
    localStorage.setItem(this.storageKey, JSON.stringify(datos));
  }


  get(): any {
    const datos = localStorage.getItem(this.storageKey);
    return datos ? JSON.parse(datos) : null;
  }

  clear(): void {
    localStorage.removeItem(this.storageKey);
  }
}
