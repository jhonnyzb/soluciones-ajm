import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginService } from './login-.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  formulario: FormGroup;
  formularioReset: FormGroup;
  timetoast: number = 3000;
  minlength: number = 6;



  constructor(private afAuth: AngularFireAuth, private router: Router, private authServices: LoginService, private toastr: ToastrService, private Formbuilder: FormBuilder) { }

  ngOnInit() {

    this.buildForm();
    this.buildFormReset()

  }

  private buildForm() {

    this.formulario = this.Formbuilder.group(
      {
        mail: ['', [Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]],
        password: ['', [Validators.required, Validators.minLength(this.minlength)]]
      }
    )

  }


  private buildFormReset() {

    this.formularioReset = this.Formbuilder.group(
      {
        mailReset: ['', [ Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]]
      }
    )

  }


  public onLogin(forms: FormGroup) {
    this.authServices.loginEmailUser(forms.value.mail, forms.value.password)
      .then((res) => {
        this.router.navigate(['/admin'])
      }).catch(
        err => this.toastr.error('', 'USUARIO O CONTRASEÑA ERRONEA', {
          timeOut: this.timetoast, progressBar: true, progressAnimation: 'increasing'
        })
      )
  }




  public resetPassword(forms: FormGroup) {

    this.authServices.ResetCorreo(forms.value.mailReset)
      .then((res) => {
        this.toastr.success('Verifique en su correo electronico instruciones para restablecer contraseña', 'Link Enviado', {
          timeOut: this.timetoast, progressBar: true, progressAnimation: 'increasing',
          positionClass: 'toast-top-full-width'
        }),
          forms.reset();
      }).catch(
        (err) => {
          this.toastr.error('Verifique que el correo ingresado sea correcto y existente', 'Error de correo', {
            timeOut: this.timetoast, progressBar: true, progressAnimation: 'increasing', 
            positionClass: 'toast-top-full-width'
          })

        })
  }


  public clear(forms: FormGroup) {
    forms.reset();
  }





  public getError(controlName: string): string {
    let error = '';
    if (controlName == 'mail') {
      const control = this.formulario.get(controlName);
      if (control.touched && control.errors != null) {
        error = "Email no valido"
      }
    } else {
      const control = this.formulario.get(controlName);
      if (control.touched && control.errors != null) {
        error = "Minimo " + this.minlength + " carateres"
      }

    }
    return error;
  }


  public getErrorReset(controlName: string): string {
    let error = '';
    const control = this.formularioReset.get(controlName);
    if (control.touched && control.errors != null) {
      error = "Email invalido";
    }
    return error;
  }

}
