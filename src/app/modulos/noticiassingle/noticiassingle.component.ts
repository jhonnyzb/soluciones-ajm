import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Noticias } from '../serviciosc/noticiascinterface';
import { NoticiassingleService } from './noticiassingle.service';


@Component({
  selector: 'app-noticiassingle',
  templateUrl: './noticiassingle.component.html',
  styleUrls: ['./noticiassingle.component.css']
})
export class NoticiassingleComponent implements OnInit, OnDestroy {

  RutasSubscription: Subscription;
  NoticiasCSubscription: Subscription;
  fuente:boolean=true;
  noticias: Noticias = {};
  idnoticia: string = "";
  idpagina: number = null;

  constructor(private routeActive: ActivatedRoute, private afs: NoticiassingleService) { }

  ngOnInit() {

    this.RutasSubscription = this.routeActive.params.subscribe(
      (params: Params) => {
        this.idnoticia = params.parametroid;
        this.idpagina = params.idpagina;
      }
    );

    this.obternerNoticia(this.idpagina, this.idnoticia);
   
  }

  obternerNoticia(id_: number, idnoticia: string) {

    if (id_ == 1) {
      this.NoticiasCSubscription = this.afs.getNoticiasContables(idnoticia).subscribe((data) => {
        this.noticias = data.payload.data();
      });
    }
    else if (id_ == 2) {
      this.NoticiasCSubscription = this.afs.getNoticiasInformaticas(idnoticia).subscribe((data) => {
        this.noticias = data.payload.data();
        this.fuente=false;
      });
    } else {
      console.log("No hay pagina")
    }

  }


  // ObtenerNoticiaC(id_: string) {
  //   this.afs.getNoticiasContables(id_).subscribe((data) => {
  //     this.noticias = data.payload.data();
  //     console.log(this.noticias)
  //   });


  // }
  ObtenerNoticiaI(id_: string) {
    console.log(id_)
  }

  ngOnDestroy() {
    this.RutasSubscription.unsubscribe();
    this.NoticiasCSubscription.unsubscribe();
  }

}
