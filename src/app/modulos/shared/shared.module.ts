import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { SharedRoutingModule } from './shared-routing.module';
import { HeaderusuariosComponent } from './headerusuarios/headerusuarios.component';


@NgModule({
  declarations: [ContactoComponent, FooterComponent, HeaderusuariosComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[ContactoComponent, FooterComponent, HeaderusuariosComponent]
})
export class SharedModule { }
