import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../../homeservices.service';

@Component({
  selector: 'app-homecuerpo',
  templateUrl: './homecuerpo.component.html',
  styleUrls: ['./homecuerpo.component.css']
})
export class HomecuerpoComponent implements OnInit {


  InfoCuerpo: Array<any> = new Array<any>();
  constructor(private afs: HomeservicesService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    //this.InfoSlider = this.afs.getimagenes(); 
    this.afs.getInfoCuerpo().subscribe(data => this.InfoCuerpo = data);
    
  }

}
