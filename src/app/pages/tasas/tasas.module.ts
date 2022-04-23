import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasasPageRoutingModule } from './tasas-routing.module';

import { TasasPage } from './tasas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasasPageRoutingModule
  ],
  declarations: [TasasPage]
})
export class TasasPageModule {}
