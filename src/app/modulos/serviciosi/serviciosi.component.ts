import { Component, OnInit } from '@angular/core';
import { InicioInterfacesPie } from '../inicio/iniciointerfaces';
import { InicioService } from '../inicio/inicio.service';

@Component({
  selector: 'app-serviciosi',
  templateUrl: './serviciosi.component.html',
  styleUrls: ['./serviciosi.component.css']
})
export class ServiciosiComponent implements OnInit {

  InfoServiciosInformaticos: Array<InicioInterfacesPie> = new Array<InicioInterfacesPie>();
  documentac:boolean=false;

  constructor(private afs: InicioService) { }

  ngOnInit() {
    this.getData();
  }

 getData() {

    this.afs.getInfoPieInformatica().subscribe((data) => {
     this.InfoServiciosInformaticos = data;
     
   }); 
 }


 pagina(){
   this.documentac=false;
 }

 document(){
   this.documentac=!this.documentac;
}


}
