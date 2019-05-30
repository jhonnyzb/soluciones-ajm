import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactenosRoutingModule } from './contactenos-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactenosComponent } from './contactenos.component';

@NgModule({
  declarations: [ContactenosComponent],
  imports: [
    CommonModule,
    SharedModule,
    ContactenosRoutingModule
  ]
})
export class ContactenosModule { }
