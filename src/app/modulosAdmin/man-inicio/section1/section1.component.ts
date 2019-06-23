import { Component, OnInit, OnDestroy } from '@angular/core';
import { InicioInterfacesSlider } from 'src/app/modulos/inicio/iniciointerfaces';
import { InicioService } from 'src/app/modulos/inicio/inicio.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';



@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit, OnDestroy {

  InfoSlider: Array<InicioInterfacesSlider> = new Array<InicioInterfacesSlider>();
  slide: InicioInterfacesSlider;
  InfosliderSubscription: Subscription;
  PorcentSubscription: Subscription;
  GeturlDowloadSubscription: Subscription;
  VformAdd: boolean = false;
  Previewbanner:boolean = false;
  formularioAdd: FormGroup;
  validatefileUpload: string = '';
  GattingBotton: boolean = false;
  uploadPercent: number = 0;
  FileInput: string;
  public ref;

  constructor(private afs: InicioService, private Formbuilder: FormBuilder, private storage: AngularFireStorage) { }

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

  };


  haber() {
    // this.GeturlDowloadSubscription = this.ref.getDownloadURL().subscribe(
    //   (url) => {
    //     this.URLPublica = url;
    //   },
    //   (err) => {
    //     console.log(err)
    //   })
  }

  Preview(form: FormGroup) {

    if (this.Previewbanner){
      this.getData();
    }
    this.GeturlDowloadSubscription = this.ref.getDownloadURL().subscribe(
      (url) => {
        this.slide = {
          descripcion: form.value.descripcion,
          titulo: form.value.titulo,
          url: url
        }
        this.InfoSlider.push(this.slide);
        this.Previewbanner = true;
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


  Vformadd() {
    this.GattingBotton = false;
    this.validatefileUpload = ''
    this.formularioAdd.reset();
    this.VformAdd = !this.VformAdd;
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
    if (this.PorcentSubscription) {
      this.PorcentSubscription.unsubscribe();
    }
    if (this.GeturlDowloadSubscription) {
      this.GeturlDowloadSubscription.unsubscribe();
    }

  }

}
