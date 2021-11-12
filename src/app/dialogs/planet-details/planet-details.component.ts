import { PlanetService } from 'src/app/Service/planet-service.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Planet } from 'src/app/Interfaces/planet';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface PlanetDetailData{
  name : string;
  rotation_period: string;
  orbital_period:  string;
  diameter:        string;
  climate:         string;
  gravity:         string;
  terrain:         string;
  surface_water:   string;
  population:      string;
  residents:       string[];
  films:           string[];
  created:         string;
  edited:          string;
  url:             string;
}

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent implements OnInit {

  planeta!: Planet;

  constructor(@Inject(MAT_DIALOG_DATA) private data: PlanetDetailData,
  private planetService : PlanetService) { }

  ngOnInit(): void {
    this.planetService.getPlanetDetails(this.data.url).subscribe(resp =>{
      this.planeta = resp
    });
  }

}
