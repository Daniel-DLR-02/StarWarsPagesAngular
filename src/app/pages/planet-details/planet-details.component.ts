import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from 'src/app/Interfaces/planet';
import { PlanetService } from 'src/app/Service/planet-service.service';
@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {
  id!: string;
  planet!: Planet;

  constructor(private activeRoute: ActivatedRoute,
    private planetService: PlanetService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(parametros => {
      this.id = parametros['idPlanet'];
      this.planetService.getPlanetById(this.id).subscribe(planet => {
        this.planet = planet;
      });
    });
  }

}
