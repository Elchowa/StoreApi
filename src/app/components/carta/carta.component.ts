import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss'],
  standalone:false
})
export class CartaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  @Input() producto:any

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
