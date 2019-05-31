import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../route-animation';

@Component({
  selector: 'app-layoutusuarios',
  templateUrl: './layoutusuarios.component.html',
  styleUrls: ['./layoutusuarios.component.css'],
  animations: [ slideInAnimation ]
})
export class LayoutusuariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
