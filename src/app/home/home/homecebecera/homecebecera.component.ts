import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../../homeservices.service';


@Component({
  selector: 'app-homecebecera',
  templateUrl: './homecebecera.component.html',
  styleUrls: ['./homecebecera.component.css']
})
export class HomecebeceraComponent implements OnInit {

  InfoSlider: Array<any> = new Array<any>();
  
  //public  InfoSlider: Observable<any> = null;

  constructor(private afs: HomeservicesService) { }

  ngOnInit() {
    this.getData();
  }


  getData(){
    //this.InfoSlider = this.afs.getimagenes(); 
    this.afs.getInfoSlider().subscribe(data => this.InfoSlider = data);
    
  }

}
