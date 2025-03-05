import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:false,
})
export class HeaderComponent  implements OnInit {
  num:number=0
  constructor(
    private router: Router,
    private carritoservice: CarritoService,
  ) { }

  ngOnInit() {
    this.carritoservice.getCartItemCount().subscribe(count => {
      this.num = count;
    });
  }
  @Input() param: number = 0;


  goToCart(){
    this.router.navigate(['/carrito'])
  }

}
