import { Component, OnInit } from '@angular/core';
import { InicioInterfacesSection5_0 } from 'src/app/modulos/inicio/iniciointerfaces';
import { InicioService } from 'src/app/modulos/inicio/inicio.service';
import { AdminService } from 'src/app/modulosAdmin/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  Infosection5_0: InicioInterfacesSection5_0 = {}

  constructor(private afs: InicioService, private adminservices: AdminService ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){

    this.afs.getInicioSection5_0('ZHv0hl7RQiKf5IC3VJvx').subscribe(
      (data)=>{
        this.Infosection5_0 = data.payload.data();
      }
    )
   }

   UpdateTitle(){
    this.adminservices.uddateTitle('ZHv0hl7RQiKf5IC3VJvx',this.Infosection5_0).then(
      (resp)=>{
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Titulo actualizado',
          showConfirmButton: false,
          timer: 1000
        })
      }).catch(
        (erro)=>{
          Swal.fire({
            position: 'center',
            type: 'error',
            title: 'Error al actualizar, intente de nuevo',
            showConfirmButton: false,
            timer: 1500
          })
        }
      )
   
   }
}
