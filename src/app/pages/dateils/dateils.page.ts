import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductosService } from 'src/app/services/productos.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-dateils',
  templateUrl: './dateils.page.html',
  styleUrls: ['./dateils.page.scss'],
  standalone: false
})
export class DateilsPage implements OnInit {
  producto: any | null = null; 
  cantidad:number=1;
  constructor(
    private route: ActivatedRoute,
    private productosService: ProductosService,
    private carritoservice: CarritoService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarProducto(Number(id));
    }
  }

  cargarProducto(id: number) {
    this.productosService.getProductos().subscribe({
      next: (res: any) => {
        const productos: any[] = res;
        this.producto = productos.find(p => p.id === id) || null;

        if (this.producto) {
          console.log("Producto cargado:", this.producto);
        } else {
          console.warn(`Producto con ID ${id} no encontrado`);
        }
      },
      error: (error: any) => {
        console.error('Error al obtener el producto', error);
      }
    });
  }

  validarCantidad() {
    if (this.cantidad < 1 || isNaN(this.cantidad)) {
      this.cantidad = 1;
    }
  }

  onClick(){
    if (this.producto) 
      {
      const productoAAgregar = {
        id: this.producto.id,
        title: this.producto.title,
        price: this.producto.price,
        description: this.producto.description,
        category: this.producto.category,
        image: this.producto.image,
        rating: {
          rate: this.producto.rating.rate,
          count: this.producto.rating.count
        },
        cantidad: this.cantidad 
      };
  
      this.carritoservice.addToCart(productoAAgregar);
      this.presentToast("bottom");
      setTimeout(() => {
        window.location.reload();
      }, 1501);

      
    }
  }
  
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Producto agregado',
      duration: 1500,
      position: position,
      cssClass: 'custom-toast',
    });

    await toast.present();
  }

  getStars(rate: number): string[] {
    const maxStars = 5;
    const fullStar = 'fas fa-star';
    const halfStar = 'fas fa-star-half-alt';
    const emptyStar = 'far fa-star';
    const stars: string[] = [];

    for (let i = 1; i <= maxStars; i++) {
      if (i <= rate) {
        stars.push(fullStar);
      } else if (i - 0.5 === rate) {
        stars.push(halfStar);
      } else {
        stars.push(emptyStar);
      }
    }
    return stars;
  }
}
