import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiassingleRoutingModule } from './noticiassingle-routing.module';
import { NoticiassingleComponent } from './noticiassingle.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [NoticiassingleComponent],
  imports: [
    CommonModule,
    SharedModule,
    NoticiassingleRoutingModule
  ]
})
export class NoticiassingleModule { }
