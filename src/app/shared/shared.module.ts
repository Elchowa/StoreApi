import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from '../services/productos.service';
import { CardModule } from '../components/carta/carta.module';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../services/carrito.service';
import { headerModule } from '../components/header/header.module';
import { itemsModule } from '../components/items/items.module';
@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    RouterModule,
  ],
  exports: [
    CardModule,
    RouterModule,
    headerModule,
    itemsModule
  ],

   
  providers: [ProductosService, CarritoService]
})
export class SharedModule { }
