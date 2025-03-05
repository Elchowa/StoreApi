import { Component, OnInit } from '@angular/core';
import { DatospersonalesService } from 'src/app/services/datospersonales.service';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.page.html',
  styleUrls: ['./factura.page.scss'],
  standalone:false,
})
export class FacturaPage implements OnInit {

  datos: any = {};

  constructor(
    private datosSvc: DatospersonalesService,
    private router: Router,
    private carritoservice: CarritoService
  ) { }

  ngOnInit() {
    this.getDatos();
  }

  getDatos(){
    this.datos = this.datosSvc.get();
    console.log(this.datos)
  }

  regrearHome(){
    this.datosSvc.clear();
    this.carritoservice.clearCart();
    this.router.navigate(['/home']);
    
  }

}
