import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetService } from 'src/app/Service/planet-service.service';
import { Planet } from 'src/app/Interfaces/planet';
@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  id!: string;
  planet!: Planet;

  constructor(private activeRoute : ActivatedRoute,
    private planetService: PlanetService) { }

    ngOnInit(): void {
      this.activeRoute.params.subscribe(parametros => {
        this.id = parametros['idPlanet'];
        this.planetService.getPlanetById(this.id).subscribe(planetaso => {
          this.planet = planetaso;
        });
      });
    }

}
