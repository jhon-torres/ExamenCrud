import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearConciertoPageRoutingModule } from './crear-concierto-routing.module';

import { CrearConciertoPage } from './crear-concierto.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CrearConciertoPageRoutingModule
  ],
  declarations: [CrearConciertoPage]
})
export class CrearConciertoPageModule {}
