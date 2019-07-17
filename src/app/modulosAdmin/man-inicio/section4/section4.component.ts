import { Component, OnInit } from '@angular/core';
import { InicioService } from 'src/app/modulos/inicio/inicio.service';
import { InicioInterfacesSection4 } from 'src/app/modulos/inicio/iniciointerfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.css']
})
export class Section4Component implements OnInit {

  Infosection4: InicioInterfacesSection4[] = [];
  formularioAddGrid: FormGroup;
  grid: InicioInterfacesSection4;
  timetoast: number = 2000;
  idgrid: string = '';
  titleModal: string = '';
  Isadd: boolean = false;
  Isupdate: boolean = false;

  constructor(private afs: InicioService, private Formbuilder: FormBuilder, private adminService: AdminService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getData();
    this.buildForm();
  }


  getData() {
    this.afs.getInicioSection4().subscribe((data) => {
      this.Infosection4 = data;
    });
  }


  private buildForm() {

    this.formularioAddGrid = this.Formbuilder.group(
      {
        id: [''],
        titulo: ['', Validators.required],
        descripcion: ['', Validators.required],
        icon: ['', [Validators.required]]
      }
    )


  }


  addGrid() {
    this.titleModal = 'Agregar Grid';
    this.Isadd = true;
    this.Isupdate = false;
  }

  updateGrid(data: InicioInterfacesSection4) {
    this.idgrid = data.id;
    this.titleModal = 'Actualizar Grid';
    this.Isupdate = true;
    this.Isadd = false;
    this.formularioAddGrid.controls['icon'].setValue(data.icono);
    this.formularioAddGrid.controls['titulo'].setValue(data.titulo);
    this.formularioAddGrid.controls['descripcion'].setValue(data.descripcion);

  }


  saveUpdateGrid(form: FormGroup, bander: number) {
    this.grid = {
      icono: form.value.icon,
      titulo: form.value.titulo,
      descripcion: form.value.descripcion
    }
    if (bander === 1) {
      this.adminService.createGrid(this.grid).then(
        (res) => {
          this.formularioAddGrid.reset();
          this.toastr.success('agregado con exito', 'Grid', {
            timeOut: this.timetoast, progressBar: true, progressAnimation: 'increasing',
            positionClass: 'toast-bottom-right'
          })
        }).catch(
          (erro) => {
            this.formularioAddGrid.reset();
            this.toastr.error('Intentelo nuevamente', 'Error', {
              timeOut: this.timetoast, progressBar: true, progressAnimation: 'increasing'
            })
          }
        )
    } else {
      this.adminService.updateGrid(this.idgrid, this.grid).then(
        (resul) => {
          this.formularioAddGrid.reset();
          this.toastr.success('Actualizado con exito', 'Grid', {
            timeOut: this.timetoast, progressBar: true, progressAnimation: 'increasing',
            positionClass: 'toast-bottom-right'
          })
        }
      ).catch(
        (erro) => {
          this.formularioAddGrid.reset();
          this.toastr.error('Intentelo nuevamente', 'Error', {
            timeOut: this.timetoast, progressBar: true, progressAnimation: 'increasing'
          })
        }
      )
    }
  }


  removeGrid(idGrid: string) {
    Swal.fire({
      title: 'Estas seguro de eliminar el grid?',
      text: "Esta accion no podra ser revertida!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.adminService.deleteGrid(idGrid);
      }
    }).catch((erro) => {
      console.log('error', erro)
    })
  }


  clearForm() {
    this.formularioAddGrid.reset();
  }


  public getErrorHomeSection4(controlName: string): string {
    let error = '';
    const control = this.formularioAddGrid.get(controlName);
    if (control.touched && control.errors != null) {
      error = '*Campo requerido';
    }
    return error;
  }

}
