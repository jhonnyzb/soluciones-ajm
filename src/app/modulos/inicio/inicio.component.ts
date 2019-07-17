import { Component, OnInit } from '@angular/core';
import { InicioInterfacesSlider, InicioInterfacesCuerpo, InicioInterfacesSection2, InicioInterfacesSection4, InicioInterfacesSection5_1, InicioInterfacesSection5_2, InicioInterfacesSection5_0, InicioInterfacesSection8 } from './iniciointerfaces';
import { InicioService } from './inicio.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {

  InfoSlider: InicioInterfacesSlider[] = [];
  InfoCuerpo: Array<InicioInterfacesCuerpo> = new Array<InicioInterfacesCuerpo>();
  Infosection4: Array<InicioInterfacesSection4> = new Array<InicioInterfacesSection4>();
  Infosection5_1: Array<InicioInterfacesSection5_1> = new Array<InicioInterfacesSection5_1>();
  Infosection5_2: Array<InicioInterfacesSection5_2> = new Array<InicioInterfacesSection5_2>();
  Infosection8: InicioInterfacesSection8 = {};
  infoheader: InicioInterfacesSection2 = {};
  Infosection5_0: InicioInterfacesSection5_0 = {};


  constructor(private afs: InicioService) { }


  ngOnInit() {

    this.getData();
  }

  getData() {

    this.afs.getInfoSlider().subscribe((data) => {
      this.InfoSlider = data;

    });


    this.afs.getInicioSection2('OMBJaqrat4KcJ0LlU9M2').subscribe((data) => {
      this.infoheader = data.payload.data();
    });

    this.afs.getInicioSection4().subscribe((data) => {
      this.Infosection4 = data;
    });

    this.afs.getInicioSection5_0('ZHv0hl7RQiKf5IC3VJvx').subscribe((data) => {
      this.Infosection5_0 = data.payload.data();
    })

    this.afs.getInicioSection5_1('i5CIxJLrRhRnyfPzh1jg').subscribe((data) => {
      this.Infosection5_1 = data;

    });

    this.afs.getInicioSection5_2('ykSHohz9g1DHGowLRoKz').subscribe((data) => {
      this.Infosection5_2 = data;

    });


    this.afs.getInicioSection8('JNIU2KXEzpoKvoOBG3ZQ').subscribe((data) => {
      this.Infosection8 = data.payload.data();

    });


    this.afs.getInfoCuerpo().subscribe((data) => {
      this.InfoCuerpo = data;

    });


  }


}
