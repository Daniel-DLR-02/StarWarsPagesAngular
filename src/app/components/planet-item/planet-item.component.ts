import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Planet } from 'src/app/Interfaces/planet';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.css']
})
export class PlanetItemComponent implements OnInit {

  @Input() planetInput !: Planet;

  constructor() { }

  ngOnInit(): void {
  }

}
