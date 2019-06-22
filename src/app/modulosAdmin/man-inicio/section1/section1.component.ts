import { Component, OnInit, OnDestroy } from '@angular/core';
import { InicioInterfacesSlider } from 'src/app/modulos/inicio/iniciointerfaces';
import { InicioService } from 'src/app/modulos/inicio/inicio.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit, OnDestroy {

  InfoSlider: Array<InicioInterfacesSlider> = new Array<InicioInterfacesSlider>();
  slide: InicioInterfacesSlider;
  InfosliderSubscription: Subscription;
  VformAdd: boolean = false;
  formularioAdd: FormGroup;
  validatefileUpload: string = ''
  GattingBotton: boolean = false;

  constructor(private afs: InicioService, private Formbuilder: FormBuilder) { }

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
        url:['']
      }
    )

  }

  onFileChange(event) {
     const file = event.target.files[0];
    if (file) {
      const extension1 = file.type.split('/')[1].toLowerCase();;
      if (extension1 !== 'png' && extension1 !== 'jpeg' && extension1 !== 'jpg' ) {
        this.GattingBotton=false;
        this.validatefileUpload = '*Formato no valido';
      } else {
        this.GattingBotton = true;
        this.validatefileUpload = '';
      }
    }

  };



  previsualizar(form: FormGroup) {
    this.slide = {
      descripcion: form.value.descripcion,
      titulo: form.value.titulo,
      url: form.value.url
    }
    this.InfoSlider.push(this.slide);
  }


  RemoveText() {
    this.GattingBotton=false;
    this.validatefileUpload = ''
    this.formularioAdd.reset();
    this.getData();
  }


  Vformadd() {
    this.GattingBotton=false;
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
    this.InfosliderSubscription.unsubscribe()

  }

}
