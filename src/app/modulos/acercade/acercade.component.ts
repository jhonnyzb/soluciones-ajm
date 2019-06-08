import { Component, OnInit, OnDestroy } from '@angular/core';
import { AcercadeService } from './acercade.service';
import { AcercadeSection1, AcercadeSection2, AcercadeInfoSection3, AcercadeInfoSection3Slider, AcercadeInfoSection4, AcercadeInfoSection4Equipo, AcercadeInfoSection5, AcercadeInfoSection6, AcercadeInfoSection6Instalaciones, AcercadeInfoSection7 } from './acercadeinterfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit, OnDestroy {


  infosection1: AcercadeSection1 = {};
  infosection1Suscription: Subscription;
  infosection2: AcercadeSection2 = {};
  infosection2Suscription: Subscription;
  infosection3: AcercadeInfoSection3 = {};
  infosection3Suscription: Subscription;
  Infosection3Slider: Array<AcercadeInfoSection3Slider> = new Array<AcercadeInfoSection3Slider>();
  Infosection3SliderSuscription: Subscription;
  infosection4: AcercadeInfoSection4 = {};
  infosection4Suscription: Subscription;
  Infosection4Equipo: Array<AcercadeInfoSection4Equipo> = new Array<AcercadeInfoSection4Equipo>();
  Infosection4EquipoSuscription: Subscription;
  infosection5: AcercadeInfoSection5 = {};
  infosection5Suscription: Subscription;
  infosection6: AcercadeInfoSection6 = {};
  infosection6Suscription: Subscription;
  Infosection6Instalaciones: Array<AcercadeInfoSection6Instalaciones> = new Array<AcercadeInfoSection6Instalaciones>();
  Infosection6InstalacionesSuscription: Subscription;
  infosection7: AcercadeInfoSection7 = {};
  infosection7Suscription: Subscription;




  constructor(private afs: AcercadeService) { }

  ngOnInit() {

    this.getData();

  }


  getData() {

    this.infosection1Suscription = this.afs.getAcercadesection1('ULWIblwCytEZlERH6jwa').subscribe((data) => {
      this.infosection1 = data.payload.data();

    });

    this.infosection2Suscription = this.afs.getAcercadesection2('maizoaMuCEnoxon1hnxM').subscribe((data) => {
      this.infosection2 = data.payload.data();

    });

    this.infosection3Suscription = this.afs.getInfoacercadeSection3('ESAVz9KQru44K9k5E3WQ').subscribe((data) => {
      this.infosection3 = data.payload.data();

    });

    this.Infosection3SliderSuscription = this.afs.getInfoacercadeSection3Slider('x1AaIbtKa5vfRr48qeAN').subscribe((data) => {
      this.Infosection3Slider = data;

    });

    this.infosection4Suscription = this.afs.getInfoacercadeSection4('fDSpjKuTJtSVGIaWALgx').subscribe((data) => {
      this.infosection4 = data.payload.data();

    });

    this.Infosection4EquipoSuscription = this.afs.getInfoacercadeSection4Equipo('sPOCUlYUrGBw231trtZY').subscribe((data)=>{
      this.Infosection4Equipo= data;
    });

    this.infosection5Suscription = this.afs.getInfoacercadeSection5('MIpfPXe4KaW1ZNdP6inO').subscribe((data) => {
      this.infosection5 = data.payload.data();

    });


    this.infosection6Suscription = this.afs.getInfoacercadeSection6('IL0zZbeVaYuAHxxJyJdN').subscribe((data) => {
      this.infosection6 = data.payload.data();

    });

    this.Infosection6InstalacionesSuscription = this.afs.getInfoacercadeSection6Instalaciones('aurhqyugH2DdanlzmMiy').subscribe((data)=>{
      this.Infosection6Instalaciones= data;
    })


    this.infosection7Suscription = this.afs.getInfoacercadeSection7('7JbDVhb0UznlnMYVTIXh').subscribe((data) => {
      this.infosection7 = data.payload.data();

    });

  }


  ngOnDestroy() {
    this.infosection1Suscription.unsubscribe();
    this.infosection2Suscription.unsubscribe();
    this.infosection3Suscription.unsubscribe();
    this.Infosection3SliderSuscription.unsubscribe();
    this.infosection4Suscription.unsubscribe();
    this.Infosection4EquipoSuscription.unsubscribe();
    this.infosection5Suscription.unsubscribe();
    this.infosection6Suscription.unsubscribe();
    this.Infosection6InstalacionesSuscription.unsubscribe();
    this.infosection7Suscription.unsubscribe();
  }
}
