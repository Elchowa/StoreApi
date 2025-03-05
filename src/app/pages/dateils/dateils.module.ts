import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateilsPageRoutingModule } from './dateils-routing.module';

import { DateilsPage } from './dateils.page';
import { headerModule } from "../../components/header/header.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateilsPageRoutingModule,
    headerModule
],
  declarations: [DateilsPage]
})
export class DateilsPageModule {}
