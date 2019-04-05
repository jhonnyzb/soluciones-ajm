import { Component, OnInit } from '@angular/core';
import { HomeservicesService } from '../../homeservices.service';
import { HomeInterfacesCuerpo } from '../../home-interfaces';

@Component({
  selector: 'app-homecuerpo',
  templateUrl: './homecuerpo.component.html',
  styleUrls: ['./homecuerpo.component.css']
})
export class HomecuerpoComponent implements OnInit {


  InfoCuerpo: Array<HomeInterfacesCuerpo> = new Array<HomeInterfacesCuerpo>();
  constructor(private afs: HomeservicesService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    
    this.afs.getInfoCuerpo().subscribe(data => this.InfoCuerpo = data);
    
  }

}
