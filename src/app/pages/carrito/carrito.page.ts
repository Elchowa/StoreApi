import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DatospersonalesService } from 'src/app/services/datospersonales.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone:false,
})

export class CarritoPage implements OnInit {
  productos: any[] = []; 
  subtotal: number = 0;
  total: number = 0;
  presentingElement!: HTMLElement | null;
  nombre: string = '';
  apellido: string = '';
  pais: string = '';
  direccion: string = '';
  creditCard: number | undefined;
  cvc: number | undefined;
  fechaDeVencimiento: Date | null = null;
  email: string = '';

  constructor(
    private carritoservice:CarritoService,
    private toastcontroller : ToastController,
    private router : Router,
    private personaldata : DatospersonalesService
  ) { }

  ngOnInit() {
    this.carritoservice.getCartProducts().subscribe(data => {
      this.productos = data;
      this.subtotal = this.getSubtotal();
      this.total = this.getTotal();
    });
    console.log(this.productos)
    this.presentingElement = document.querySelector('.ion-page');
  }

  getSubtotal(): number {
    return this.productos.reduce((acc, product) => acc + product.price * product.cantidad, 0);
  }
  
  getTotal(): number {
    const subtotal = this.getSubtotal();
    const impuestos = subtotal * 0.16; 
    return subtotal + impuestos;
  }

  onSubmit() {
    const Datos = {
      nombre: this.nombre,
      apellido: this.apellido,
      pais: this.pais,
      direccion: this.direccion,
      creditCard: this.creditCard,
      cvc: this.cvc,
      fechaDeVencimiento: this.fechaDeVencimiento,
      email: this.email,
      total: this.total
    };

    this.presentToast("bottom");
    this.personaldata.add(Datos);

    setTimeout(() => {
      this.router.navigate(['/load']);
    }, 1500);

  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastcontroller.create({
      message: 'Transaccion en proceso',
      duration: 1500,
      position: position,
      cssClass: 'custom-toast',
    });

    await toast.present();
  }

  getStars(rating: number): string[] {
    let stars: string[] = new Array(5).fill('far fa-star'); 
    let i = 0;
  
    while (rating >= 1 && i < 5) {
      stars[i] = 'fas fa-star';
      rating--;
      i++;
    }
  
    if (rating >= 0.5 && i < 5) {
      stars[i] = 'fas fa-star-half-alt';
    }
  
    return stars;
  }
}
