import { Component, OnInit } from '@angular/core';
import { InicioInterfacesPie } from '../iniciointerfaces';
import { InicioService } from '../inicio.service';

@Component({
  selector: 'app-iniciocontable',
  templateUrl: './iniciocontable.component.html',
  styleUrls: ['./iniciocontable.component.css']
})
export class IniciocontableComponent implements OnInit {

  InfoPieContable: Array<InicioInterfacesPie> = new Array<InicioInterfacesPie>();

  constructor(private afs: InicioService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {

    this.afs.getInfoPieContable().subscribe(data => this.InfoPieContable = data);

  }
}
