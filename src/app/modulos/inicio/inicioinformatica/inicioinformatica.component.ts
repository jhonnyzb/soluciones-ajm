import { Component, OnInit } from '@angular/core';
import { InicioInterfacesPie } from '../iniciointerfaces';
import { InicioService } from '../inicio.service';



@Component({
  selector: 'app-inicioinformatica',
  templateUrl: './inicioinformatica.component.html',
  styleUrls: ['./inicioinformatica.component.css']
 
})
export class InicioinformaticaComponent implements OnInit {

  InfoPieInformatica: Array<InicioInterfacesPie> = new Array<InicioInterfacesPie>();

  constructor(private afs: InicioService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {

    this.afs.getInfoPieInformatica().subscribe(data => this.InfoPieInformatica = data);

  }

}
