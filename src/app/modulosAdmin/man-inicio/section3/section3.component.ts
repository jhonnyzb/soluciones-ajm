import { Component, OnInit } from '@angular/core';
import { InicioService } from 'src/app/modulos/inicio/inicio.service';
import { InicioInterfacesCuerpo } from 'src/app/modulos/inicio/iniciointerfaces';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit {

  InfoCuerpo: Array<InicioInterfacesCuerpo> = new Array<InicioInterfacesCuerpo>();
  card: InicioInterfacesCuerpo;
  formularioAddCards: FormGroup;
  idcard: string = '';
  timetoast: number = 2000;
  titleModal: string = '';
  Isadd: boolean = false;
  Isupdate: boolean = false;


  constructor(private afs: InicioService, private Formbuilder: FormBuilder, private adminService: AdminService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getData();
    this.buildForm();
  }

  getData() {
    this.afs.getInfoCuerpo().subscribe((data) => {
      this.InfoCuerpo = data;

    });
  }


  private buildForm() {

    this.formularioAddCards = this.Formbuilder.group(
      {
        id:[''],
        titulo: ['', Validators.required],
        descripcion: ['', Validators.required],
        icon: ['', [Validators.required]]
      }
    )


  }

  addCard() {
    this.titleModal = 'Agregar Card';
    this.Isadd = true;
    this.Isupdate = false;
  }


  updateCard(data: InicioInterfacesCuerpo) {
    this.idcard = data.id;
    this.titleModal = 'Actualizar Card';
    this.Isupdate = true;
    this.Isadd = false;
    this.formularioAddCards.controls['icon'].setValue(data.icon);
    this.formularioAddCards.controls['titulo'].setValue(data.titulo);
    this.formularioAddCards.controls['descripcion'].setValue(data.descripcion);

  }

  saveUpdateCard(form: FormGroup, bander: number) {
    this.card = {
      icon: form.value.icon,
      titulo: form.value.titulo,
      descripcion: form.value.descripcion
    }
    if (bander === 1) {
      this.adminService.createCard(this.card).then(
        (res) => {
          this.formularioAddCards.reset();
          this.toastr.success('agregado con exito', 'Cards', {
            timeOut: this.timetoast, progressBar: true, progressAnimation: 'increasing',
            positionClass: 'toast-bottom-right'
          })
        }).catch(
          (erro) => {
            this.formularioAddCards.reset();
            this.toastr.error('Intentelo nuevamente', 'Error', {
              timeOut: this.timetoast, progressBar: true, progressAnimation: 'increasing'
            })
          }
        )
    } else {
      this.adminService.updateCards(this.idcard, this.card).then(
        (resul)=>{
          this.formularioAddCards.reset();
          this.toastr.success('Actualizado con exito', 'Card', {
            timeOut: this.timetoast, progressBar: true, progressAnimation: 'increasing',
            positionClass:'toast-bottom-right'
          })
        }
      ).catch(
        (erro)=>{
          this.formularioAddCards.reset();
          this.toastr.error('Intentelo nuevamente', 'Error', {
            timeOut: this.timetoast, progressBar: true, progressAnimation: 'increasing'
          })
        }
      )
    }
  }


  clearForm() {
    this.formularioAddCards.reset();
  }


  removeCards(idCards: string) {
    Swal.fire({
      title: 'Estas seguro de eliminar el card?',
      text: "Esta accion no podra ser revertida!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.adminService.deleteCards(idCards);
      }
    }).catch((erro) => {
      console.log('error', erro)
    })
  }




  public getErrorHomeSection3(controlName: string): string {
    let error = '';
    const control = this.formularioAddCards.get(controlName);
    if (control.touched && control.errors != null) {
      error = '*Campo requerido';
    }
    return error;
  }


}
