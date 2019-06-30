import { Component, OnInit, OnDestroy } from '@angular/core';
import { InicioService } from 'src/app/modulos/inicio/inicio.service';
import { AdminService } from 'src/app/modulosAdmin/admin.service';
import { InicioInterfacesSlider } from 'src/app/modulos/inicio/iniciointerfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-slider',
  templateUrl: './update-slider.component.html',
  styleUrls: ['./update-slider.component.css']
})
export class UpdateSliderComponent implements OnInit,  OnDestroy {

  InfoSlider: Array<InicioInterfacesSlider> = new Array<InicioInterfacesSlider>();
  InfosliderSubscription: Subscription;
  
  constructor(private afs: InicioService, private adminService: AdminService) { }

  ngOnInit() {
    this.getData();
  }


  getData() {
    this.InfosliderSubscription = this.afs.getInfoSlider().subscribe(
      (data) => {
        this.InfoSlider = data;
      })

  }


  ngOnDestroy() {
    this.InfosliderSubscription.unsubscribe();
  }

}
