import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppDetailPage } from './app-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AppDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppDetailPageRoutingModule {}
