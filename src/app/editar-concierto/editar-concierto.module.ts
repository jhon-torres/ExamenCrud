import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarConciertoPageRoutingModule } from './editar-concierto-routing.module';

import { EditarConciertoPage } from './editar-concierto.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EditarConciertoPageRoutingModule
  ],
  declarations: [EditarConciertoPage]
})
export class EditarConciertoPageModule {}
