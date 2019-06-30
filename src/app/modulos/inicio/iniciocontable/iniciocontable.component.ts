import { Component, OnInit } from '@angular/core';
import { InicioInterfacesPie, InicioInterfacesSection8 } from '../iniciointerfaces';
import { InicioService } from '../inicio.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-iniciocontable',
  templateUrl: './iniciocontable.component.html',
  styleUrls: ['./iniciocontable.component.css']
})
export class IniciocontableComponent implements OnInit {

  InfoPieContable: Array<InicioInterfacesPie> = new Array<InicioInterfacesPie>();
  /* InfoPieContable: Observable<InicioInterfacesPie[]>; */

  id:string=''

  constructor(private afs: InicioService) {
  }


  ngOnInit() {
    this.getData();
  }

  getData() {
     /*  this.InfoPieContable = this.afs.getInfoPieContable();
      console.log(this.InfoPieContable) */
      this.afs.getInfoPieContable().subscribe((data) => {
      this.InfoPieContable = data;
    });

  
    
  }
}
