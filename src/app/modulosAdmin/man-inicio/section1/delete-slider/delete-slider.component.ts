import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { InicioService } from 'src/app/modulos/inicio/inicio.service';
import { InicioInterfacesSlider } from 'src/app/modulos/inicio/iniciointerfaces';
import { AdminService } from 'src/app/modulosAdmin/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-slider',
  templateUrl: './delete-slider.component.html',
  styleUrls: ['./delete-slider.component.css']
})
export class DeleteSliderComponent implements OnInit, OnDestroy {

  InfoSlider: Array<InicioInterfacesSlider> = new Array<InicioInterfacesSlider>();
  InfosliderSubscription: Subscription;

  constructor(private afs: InicioService, private adminService: AdminService) { }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.InfosliderSubscription = this.afs.getInfoSlider().subscribe(
      (data) => {
        this.InfoSlider = data;
      })

  }

  RemoveSlider(idslide: string) {
    Swal.fire({
      title: 'Estas seguro de eliminar el Slide?',
      text: "Esta accion no podra ser revertida!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.adminService.deleteSlide(idslide);
      }
    })

  }


  ngOnDestroy() {
    this.InfosliderSubscription.unsubscribe();
  }
}
