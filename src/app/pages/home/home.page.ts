import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  productos: any[] = [];
  isLoading = true;


  constructor(
    private ProductosService: ProductosService, 
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }



  busqueda: string = '';
  productosFiltrados: any[] = [];

  ngOnInit() {
    this.getProductos()

  }

  getProductos(cat?: string) {

    this.ProductosService.getProductos().subscribe({

      next: (res: any) => {

        this.productos = [];

        for (let product of res) {
          if (!cat || product.category === cat) {
            this.productos.push(product);
          }
        }

        console.log(this.productos);
      },
      error: (error: any) => {
        console.error("Error al obtener productos", error);
      }
    })
  }

  buscarProductos(nombre: string) {
    this.busqueda = nombre;
  
    if (!nombre) {
      this.productosFiltrados = this.productos;
      this.cdr.detectChanges(); 
      return;
    }
  
    this.ProductosService.getProductos().subscribe({
      next: (res: any) => {
        const productosEncontrados: any[] = [];
        for (let producto of res) {
          if (producto.title.toLowerCase().includes(nombre.toLowerCase())) {
            productosEncontrados.push(producto);
          }
        }
        this.productosFiltrados = productosEncontrados;
        this.cdr.detectChanges();
      },
      error: (error: any) => {
        console.error("Error al buscar productos", error);
      }
    });
  }
  


  irDetalles(id: number) {
    this.router.navigate(['/dateils', id])
  }


}