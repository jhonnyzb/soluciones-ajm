import { Component, OnInit } from '@angular/core';
import { InicioInterfacesSection2 } from 'src/app/modulos/inicio/iniciointerfaces';
import { InicioService } from 'src/app/modulos/inicio/inicio.service';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.css']
})
export class Section2Component implements OnInit {

  infoheader: InicioInterfacesSection2 = {};
  timetoast: number = 3000;

  constructor(private afs: InicioService, private adminservices: AdminService,private toastr: ToastrService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.afs.getInicioSection2('OMBJaqrat4KcJ0LlU9M2').subscribe((data) => {
      this.infoheader = data.payload.data();
    });
  }

  UpdateSection2() {
    this.adminservices.updatesection2('OMBJaqrat4KcJ0LlU9M2',this.infoheader).then(
      (resp)=>{
        this.toastr.success('Guardados exitosamente', 'Cambios', {
          timeOut: this.timetoast, progressBar: true, progressAnimation: 'increasing',
          positionClass:'toast-bottom-right'
        })

      }).catch(
        (erro)=>{
          this.toastr.error('Intentelo nuevamente', 'Error', {
            timeOut: this.timetoast, progressBar: true, progressAnimation: 'increasing'
          })
        }
      )
  }
}