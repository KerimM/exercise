import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppDetailPageRoutingModule } from './app-detail-routing.module';

import { AppDetailPage } from './app-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppDetailPageRoutingModule
  ],
  declarations: [AppDetailPage]
})
export class AppDetailPageModule {}
