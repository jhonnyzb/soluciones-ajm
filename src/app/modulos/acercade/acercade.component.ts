import { Component, OnInit, OnDestroy } from '@angular/core';
import { AcercadeService } from './acercade.service';
import { AcercadeSection1, AcercadeSection2, AcercadeInfoSection3, AcercadeInfoSection3Slider } from './acercadeinterfaces';
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



  }


  ngOnDestroy() {
    this.infosection1Suscription.unsubscribe();
    this.infosection2Suscription.unsubscribe();
    this.infosection3Suscription.unsubscribe();
    this.Infosection3SliderSuscription.unsubscribe();
  }
}
