import { Component, OnInit, OnDestroy } from '@angular/core';
import { InicioInterfacesPie } from '../inicio/iniciointerfaces';
import { InicioService } from '../inicio/inicio.service';
import { Noticiasi } from './noticiasinterfaces';
import { NoticiasiService } from './noticiasi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-serviciosi',
  templateUrl: './serviciosi.component.html',
  styleUrls: ['./serviciosi.component.css']
})
export class ServiciosiComponent implements OnInit, OnDestroy {

  InfoServiciosInformaticos: Array<InicioInterfacesPie> = new Array<InicioInterfacesPie>();
  InfoNoticiasInformaticas: Array<Noticiasi> = new Array<Noticiasi>();
  InfoServInformaticosSubscription: Subscription;
  InfoNoticiasInformaticosSubscription: Subscription;
  documentac: boolean = false;

  constructor(private afs: InicioService, private notinformaticas: NoticiasiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {

    this.InfoServInformaticosSubscription = this.afs.getInfoPieInformatica().subscribe((data) => {
      this.InfoServiciosInformaticos = data;

    });

    this.InfoNoticiasInformaticosSubscription = this.notinformaticas.ObtenerNoticiasInformaticas().subscribe((data) => {
      this.InfoNoticiasInformaticas = data;
    });

  }


  pagina() {
    this.documentac = false;
  }

  document() {
    this.documentac = !this.documentac;
  }


  ngOnDestroy() {
    this.InfoNoticiasInformaticosSubscription.unsubscribe();
    this.InfoServInformaticosSubscription.unsubscribe();

  }

}
