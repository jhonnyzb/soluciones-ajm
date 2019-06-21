import { Component, OnInit, OnDestroy } from '@angular/core';
import { InicioInterfacesSlider } from 'src/app/modulos/inicio/iniciointerfaces';
import { InicioService } from 'src/app/modulos/inicio/inicio.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

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
        url: ['', Validators.required ]
      }
    )

  }


validation(control: AbstractControl){
  const file = control.value;
  if(file){
  console.log(file.split('.')[1].toLowerCase())
  }
}


  previsualizar(form: FormGroup) {
    this.slide = {
      descripcion: form.value.descripcion,
      titulo: form.value.titulo,
      url: form.value.url
    }
    this.InfoSlider.push(this.slide);
  }


  borrar() {
    this.formularioAdd.reset();
    this.getData();
  }


  Vformadd() {
    this.VformAdd = !this.VformAdd;
  }



  ngOnDestroy() {
    this.InfosliderSubscription.unsubscribe()

  }
}
