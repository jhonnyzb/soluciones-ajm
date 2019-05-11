import { Component, OnInit } from '@angular/core';
import { InicioInterfacesSlider, InicioInterfacesCuerpo, InicioInterfacesSection2, InicioInterfacesSection4 } from './iniciointerfaces';
import { InicioService } from './inicio.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  InfoSlider: Array<InicioInterfacesSlider> = new Array<InicioInterfacesSlider>();
  InfoCuerpo: Array<InicioInterfacesCuerpo> = new Array<InicioInterfacesCuerpo>();
  Infosection4: Array<InicioInterfacesSection4> = new Array<InicioInterfacesSection4>();
  infoheader: InicioInterfacesSection2 = {};


  constructor(private afs: InicioService) { }

  

  ngOnInit() {
    this.getData();
  }

  getData() {

    this.afs.getInfoSlider().subscribe(data => this.InfoSlider = data);

    this.afs.getInicioSection2('OMBJaqrat4KcJ0LlU9M2').subscribe((data)=>{
      this.infoheader=data.payload.data();
      
    });

    this.afs.getInicioSection4().subscribe(data => this.Infosection4 = data);

    this.afs.getInfoCuerpo().subscribe(data => this.InfoCuerpo = data);


  }


}
