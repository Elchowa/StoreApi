import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ItemsComponent } from './items.component';
@NgModule({
  declarations: [ItemsComponent], 
  imports: [CommonModule, IonicModule], 
  exports: [ItemsComponent] 
})
export class itemsModule {}