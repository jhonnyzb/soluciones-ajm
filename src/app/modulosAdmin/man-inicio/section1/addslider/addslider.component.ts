import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InicioService } from 'src/app/modulos/inicio/inicio.service';
import { InicioInterfacesSlider } from 'src/app/modulos/inicio/iniciointerfaces';
import { Subscription, Observable } from 'rxjs';
import { AdminService } from 'src/app/modulosAdmin/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addslider',
  templateUrl: './addslider.component.html',
  styleUrls: ['./addslider.component.css']
})
export class AddsliderComponent implements OnInit, OnDestroy {


  InfoSlider: Array<InicioInterfacesSlider> = new Array<InicioInterfacesSlider>();
  slide: InicioInterfacesSlider;
  InfosliderSubscription: Subscription;
  PorcentSubscription: Subscription;
  GeturlDowloadSubscription: Subscription;
  formularioAdd: FormGroup;
  GattingBotton: boolean = false;
  Previewbanner: boolean = false;
  validatefileUpload: string = '';
  uploadPercent: number = 0;
  public ref;

  variable: string = '';
  variable1: string = '';




  constructor(private afs: InicioService, private Formbuilder: FormBuilder, private storage: AngularFireStorage, private serviceAdmin: AdminService) { }

  ngOnInit() {
    this.getData();
    this.buildForm();
  }


  getData() {

    this.InfosliderSubscription = this.afs.getInfoSlider().subscribe((data) => {
      this.InfoSlider = data;

    });
  }

  private buildForm() {

    this.formularioAdd = this.Formbuilder.group(
      {
        titulo: ['', Validators.required],
        descripcion: ['', Validators.required],
        url: ['']
      }
    )


  }


  onFileChange(event) {
    const file = event.target.files[0];

    if (file) {
      this.GattingBotton = false;
      const extension1 = file.type.split('/')[1].toLowerCase();;
      if (extension1 !== 'png' && extension1 !== 'jpeg' && extension1 !== 'jpg') {
        this.GattingBotton = false;
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
            if (this.uploadPercent == 100) {
              this.GattingBotton = true;
            }
          }, (err) => {
            console.log(err)
          }
        );
        this.validatefileUpload = '';
      }
    }

  }

  Preview(form: FormGroup, previewSend: number) {

    if (this.Previewbanner) {
      this.getData();
    }
    this.GeturlDowloadSubscription = this.ref.getDownloadURL().subscribe(
      (url) => {
        this.slide = {
          descripcion: form.value.descripcion,
          titulo: form.value.titulo,
          url: url
        }
        if (previewSend === 1) {
          this.InfoSlider.push(this.slide);
          this.Previewbanner = true;
          console.log('preview')
        }
        else{
          this.serviceAdmin.createSlider(this.slide).then(
            (res)=>{
              Swal.fire({
                position: 'center',
                type: 'success',
                title: 'Slide Agregado',
                showConfirmButton: false,
                timer: 2000
              })
              this.formularioAdd.reset();
              this.uploadPercent = 0;             
            }
          ).catch(
            (erro)=>{
              Swal.fire({
                position: 'center',
                type: 'error',
                title: 'Error al agregar Slide intente nuevamente',
                showConfirmButton: false,
                timer: 3000
              })
            }
          )
         
        }
      })

  }

  RemoveText() {
    this.uploadPercent = 0;
    this.GattingBotton = false;
    this.Previewbanner = false;
    this.validatefileUpload = ''
    this.formularioAdd.reset();
    this.getData();
  }

  public getErrorHomeSection1(controlName: string): string {
    let error = '';
    const control = this.formularioAdd.get(controlName);
    if (control.touched && control.errors != null) {
      error = '*Campo requerido';
    }
    return error;
  }


  ngOnDestroy() {
    this.InfosliderSubscription.unsubscribe();
    this.InfosliderSubscription.unsubscribe();
    if (this.PorcentSubscription) {
      this.PorcentSubscription.unsubscribe();
    }
    if (this.GeturlDowloadSubscription) {
      this.GeturlDowloadSubscription.unsubscribe();
    }
  }


}