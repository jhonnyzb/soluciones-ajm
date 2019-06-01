import { Component, OnInit, OnDestroy } from '@angular/core';
import { InicioInterfacesPie } from '../inicio/iniciointerfaces';
import { InicioService } from '../inicio/inicio.service';
import { Noticiasc } from './noticiascinterface';
import { NoticiascService } from './noticiasc.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-serviciosc',
  templateUrl: './serviciosc.component.html',
  styleUrls: ['./serviciosc.component.css']
})
export class ServicioscComponent implements OnInit, OnDestroy {

  InfoServiciosContable: Array<InicioInterfacesPie> = new Array<InicioInterfacesPie>();
  InfoNoticiasContables: Array<Noticiasc> = new Array<Noticiasc>();
  InfoServContablesSubscription: Subscription;

  documentac:boolean=false;
  
  constructor(private afs: InicioService, private notcontables:NoticiascService) {
    

   }

  ngOnInit() {
    this.getData();
  }

  

  getData() {

     this.InfoServContablesSubscription= this.afs.getInfoPieContable().subscribe((data) => {
      this.InfoServiciosContable = data;
    }); 

    this.notcontables.getNoticiasContables().subscribe((data) => {
      this.InfoNoticiasContables = data;
      console.log(this.InfoNoticiasContables) 
    }); 



  }


  pagina(){
    this.documentac=false;
  }

  document(){
    this.documentac=!this.documentac;
}



ngOnDestroy() {
  this.InfoServContablesSubscription.unsubscribe();
}
}