import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../../homeservices.service';

@Component({
  selector: 'app-homecontable',
  templateUrl: './homecontable.component.html',
  styleUrls: ['./homecontable.component.css']
})
export class HomecontableComponent implements OnInit {

  InfoPieContable: Array<any> = new Array<any>();
  constructor(private afs: HomeservicesService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    //this.InfoSlider = this.afs.getimagenes(); 
    this.afs.getInfoPieContable().subscribe(data => this.InfoPieContable = data);

  }
}
