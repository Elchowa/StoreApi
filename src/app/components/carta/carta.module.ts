import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CartaComponent } from './carta.component';

@NgModule({
  declarations: [CartaComponent], 
  imports: [CommonModule, IonicModule], 
  exports: [CartaComponent] 
})
export class CardModule {}