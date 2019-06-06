import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-noticiassingle',
  templateUrl: './noticiassingle.component.html',
  styleUrls: ['./noticiassingle.component.css']
})
export class NoticiassingleComponent implements OnInit, OnDestroy {

  prueba: string = "dfd";
  url1: string = "";
  url2: string = "";
  ParametrosSubscription: Subscription;

  idnoticia: string = "";
  idpagina: number = null;

  constructor(private routeActive: ActivatedRoute) { }

  ngOnInit() {

    this.ParametrosSubscription = this.routeActive.params.subscribe(
      (params: Params) => {
        this.idnoticia = params.parametroid;
        this.idpagina = params.idpagina;
      }
    );

    if (this.idpagina == 1) {
      this.ObtenerNoticiaC(this.idnoticia)
    } else if (this.idpagina == 2) {
      this.ObtenerNoticiaI(this.idnoticia)
    }else{
      console.log("no hay pagina")
    }

  }

  ObtenerNoticiaC(id_: string) {
    console.log(id_)
  }
  ObtenerNoticiaI(id_: string) {
    console.log(id_)
  }

  ngOnDestroy() {
    this.ParametrosSubscription.unsubscribe();
  }

}
