import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../../homeservices.service';
import { HomeInterfacesPie } from '../../home-interfaces';



@Component({
  selector: 'app-homecontable',
  templateUrl: './homecontable.component.html',
  styleUrls: ['./homecontable.component.css']
})
export class HomecontableComponent implements OnInit {

  InfoPieContable: Array<HomeInterfacesPie> = new Array<HomeInterfacesPie>();
 
 
  constructor(private afs: HomeservicesService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    
    this.afs.getInfoPieContable().subscribe(data => this.InfoPieContable = data);

  }
}
