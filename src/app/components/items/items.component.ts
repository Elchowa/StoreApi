import { Component, input, OnInit, Input } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  standalone:false,
})
export class ItemsComponent  implements OnInit {

  constructor(
    private carritoservice: CarritoService,
    private toastcontroller: ToastController
  ) { }

  ngOnInit() {}

  @Input() producto:any

  borrar(id:number){
    this.carritoservice.removeFromCart(id);
    this.presentToast('bottom')
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastcontroller.create({
      message: 'Producto Borrado',
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
