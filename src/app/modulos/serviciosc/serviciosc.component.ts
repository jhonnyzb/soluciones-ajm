import { Component, OnInit } from '@angular/core';
import { InicioInterfacesPie } from '../inicio/iniciointerfaces';
import { InicioService } from '../inicio/inicio.service';


@Component({
  selector: 'app-serviciosc',
  templateUrl: './serviciosc.component.html',
  styleUrls: ['./serviciosc.component.css']
})
export class ServicioscComponent implements OnInit {

  InfoServiciosContable: Array<InicioInterfacesPie> = new Array<InicioInterfacesPie>();


  constructor(private afs: InicioService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {

    this.afs.getInfoPieContable().subscribe((data) => {
      this.InfoServiciosContable = data;
      
    });

  }

}
