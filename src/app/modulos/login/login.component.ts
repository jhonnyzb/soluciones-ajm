import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  minlength: number = 6;



  constructor(private afAuth: AngularFireAuth, private router: Router, private authServices: LoginService, private toastr: ToastrService, private Formbuilder: FormBuilder) { }

  ngOnInit() {

    this.buildForm();

  }

  private buildForm() {
    
    this.formulario = this.Formbuilder.group(
      {
        mail: ['', [Validators.required, Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]],
        password: ['', [Validators.required, Validators.minLength(this.minlength)]]
      }
    )

  }


  onLogin(forms: FormGroup): void {
    this.authServices.loginEmailUser(forms.value.mail, forms.value.password)
      .then((res) => {
        this.router.navigate(['/admin'])
      }).catch(
        err => this.toastr.error('', 'USUARIO O CONTRASEÑA ERRONEA', {
          timeOut: 1000, progressBar: true, progressAnimation: 'increasing'
        })
      )
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

}
