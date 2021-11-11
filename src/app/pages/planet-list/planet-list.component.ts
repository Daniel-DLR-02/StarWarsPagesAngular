import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/Service/planet-service.service';
import { Planet } from 'src/app/Interfaces/planet';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  planets : Planet[] = [];

  constructor(private planetService : PlanetService) { }

  ngOnInit(): void {
    this.planetService.getPlanetList().subscribe(resp =>{
      this.planets = resp.results;
    });
  }



}
