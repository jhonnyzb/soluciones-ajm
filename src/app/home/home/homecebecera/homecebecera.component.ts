import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../../homeservices.service';
import { HomeInterfacesSlider } from '../../home-interfaces';


@Component({
  selector: 'app-homecebecera',
  templateUrl: './homecebecera.component.html',
  styleUrls: ['./homecebecera.component.css']
})
export class HomecebeceraComponent implements OnInit {

  InfoSlider: Array<HomeInterfacesSlider> = new Array<HomeInterfacesSlider>();
  
  
  constructor(private afs: HomeservicesService) { }

  ngOnInit() {
    this.getData();
  }


  getData(){
    
    this.afs.getInfoSlider().subscribe(data => this.InfoSlider = data);
    
  }

}
