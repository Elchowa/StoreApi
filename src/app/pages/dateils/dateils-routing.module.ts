import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateilsPage } from './dateils.page';

const routes: Routes = [
  {
    path: '',
    component: DateilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateilsPageRoutingModule {}
