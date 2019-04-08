import { Component, OnInit } from '@angular/core';
import { InicioInterfacesSlider, InicioInterfacesCuerpo } from './iniciointerfaces';
import { InicioService } from './inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  InfoSlider: Array<InicioInterfacesSlider> = new Array<InicioInterfacesSlider>();
  InfoCuerpo: Array<InicioInterfacesCuerpo> = new Array<InicioInterfacesCuerpo>();

  constructor(private afs: InicioService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {

    this.afs.getInfoSlider().subscribe(data => this.InfoSlider = data);
    this.afs.getInfoCuerpo().subscribe(data => this.InfoCuerpo = data);


  }


}
