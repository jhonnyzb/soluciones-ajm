import { Component, OnInit } from '@angular/core';
import { HomeInterfacesPie } from '../../home-interfaces';
import { HomeservicesService } from '../../homeservices.service';

@Component({
  selector: 'app-homeinformatico',
  templateUrl: './homeinformatico.component.html',
  styleUrls: ['./homeinformatico.component.css']
})
export class HomeinformaticoComponent implements OnInit {


  InfoPieInformatica: Array<HomeInterfacesPie> = new Array<HomeInterfacesPie>();
  
  constructor(private afs: HomeservicesService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    
    this.afs.getInfoPieInformatica().subscribe(data => this.InfoPieInformatica = data);

  }

}
