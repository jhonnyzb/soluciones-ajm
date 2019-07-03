import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { InicioService } from 'src/app/modulos/inicio/inicio.service';
import { InicioInterfacesSlider } from 'src/app/modulos/inicio/iniciointerfaces';
import { AdminService } from 'src/app/modulosAdmin/admin.service';
import Swal from 'sweetalert2';
import { AngularFireStorage } from '@angular/fire/storage';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-delete-slider',
  templateUrl: './delete-slider.component.html',
  styleUrls: ['./delete-slider.component.css']
})
export class DeleteSliderComponent implements OnInit, OnDestroy {

  InfoSlider: Array<InicioInterfacesSlider> = new Array<InicioInterfacesSlider>();
  validatefileUpload: string = '';
  uploadPercent: number = 0;
  PorcentSubscription: Subscription;
  GeturlDowloadSubscription: Subscription;
  timetoast: number = 3000;
  public ref;
  Dataslideredit: InicioInterfacesSlider = {
    titulo: '',
    descripcion: '',
    url: ''
  };


  InfosliderSubscription: Subscription;



  constructor(private afs: InicioService, private adminService: AdminService, private storage: AngularFireStorage, private toastr: ToastrService) { }

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


  PreviewUpdateSlider(slide: InicioInterfacesSlider) {
    this.Dataslideredit = slide;

  }

  UpdateSlider() {

    if (this.ref) {
      this.GeturlDowloadSubscription = this.ref.getDownloadURL().subscribe(
        (url) => {
          let idslide = this.Dataslideredit.id;
          let slide = {
            titulo: this.Dataslideredit.titulo,
            descripcion: this.Dataslideredit.descripcion,
            url: url
          }
          this.updateSlide(idslide, slide);
        })
    } else {
      let idslide = this.Dataslideredit.id;
      let slide = {
        titulo: this.Dataslideredit.titulo,
        descripcion: this.Dataslideredit.descripcion,
        url: this.Dataslideredit.url
      }
      this.updateSlide(idslide, slide);
    }

  }


  updateSlide(idslide: string, slide: InicioInterfacesSlider) {
    this.adminService.updateSlide(idslide, slide).then(
      (result) => {
        this.uploadPercent = 0;
        this.toastr.success('Actualizado con exito', 'Slide', {
          timeOut: this.timetoast, progressBar: true, progressAnimation: 'increasing',
          positionClass:'toast-bottom-right'
        })
        
      }).catch(
        (erro) => {
          this.uploadPercent = 0;
          this.toastr.error('Intentelo nuevamente', 'Error', {
            timeOut: this.timetoast, progressBar: true, progressAnimation: 'increasing'
          })
        }
      )
  }




  onFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      const extension1 = file.type.split('/')[1].toLowerCase();
      if (extension1 !== 'png' && extension1 !== 'jpeg' && extension1 !== 'jpg') {
        event.target.value = '';
        this.validatefileUpload = '*Formato no valido';

      } else {
        const id = Math.random().toString(36).substring(2);
        const filepatch = `Slider/${id}.${extension1}`;
        this.ref = this.storage.ref(filepatch);
        const task = this.storage.upload(filepatch, file);
        this.PorcentSubscription = task.percentageChanges().subscribe(
          (porcent) => {
            this.uploadPercent = Math.round(porcent);
          }, (err) => {
            console.log(err)
          }
        );
        this.validatefileUpload = '';

      }
    }
  }





  ngOnDestroy() {
    this.InfosliderSubscription.unsubscribe();
    if (this.PorcentSubscription) {
      this.PorcentSubscription.unsubscribe();
    }
    if (this.GeturlDowloadSubscription) {
      this.GeturlDowloadSubscription.unsubscribe();
    }
  }
}
