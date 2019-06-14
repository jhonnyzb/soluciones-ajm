import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  formulario: FormGroup;
  minlength: number = 10;
  maxlength: number = 10


  constructor(private Formbuilder: FormBuilder) { }



  ngOnInit() {
    this.buildForm();
  }


  private buildForm() {

    this.formulario = this.Formbuilder.group(
      {
        nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
        mail: ['', [Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]],
        telefono: ['', [Validators.required, Validators.minLength(this.minlength), Validators.maxLength(this.maxlength), Validators.pattern(/^\d+$/)]],
        textarea: ['', Validators.required]
      }
    )

  }



  public Contacto(forms: FormGroup) {

    console.log('mensaje enviado')
    forms.reset();
  }



  public getError(controlName: string): string {
    let error = '';
    if (controlName == 'nombre') {
      const control = this.formulario.get(controlName);
      if (control.touched && control.errors != null) {
        error = "*Campo requerido"
      }
    }
    else if (controlName == 'mail') {
      const control = this.formulario.get(controlName);
      if (control.touched && control.errors != null) {
        error = "*Email invalido"
      }
    }
    else if (controlName == 'telefono') {
      const control = this.formulario.get(controlName);
      if (control.touched && control.errors != null) {
        error = "*Número de telefono invalido"
      }
    }
    else {
      const control = this.formulario.get(controlName);
      if (control.touched && control.errors != null) {
        error = "*Campo requerido"
      }
      
    }
    return error;
  }


}
