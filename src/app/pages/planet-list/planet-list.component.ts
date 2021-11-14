import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/Service/planet-service.service';
import { Planet } from 'src/app/Interfaces/planet';
import { MatDialog } from '@angular/material/dialog';
import { PlanetDetailsDialogComponent } from 'src/app/dialogs/planet-details-dialog/planet-details-dialog.component';
@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  planets : Planet[] = [];
  planetaBuscado !: Planet;

  constructor(private planetService : PlanetService,
    private dialog : MatDialog) { }

  ngOnInit(): void {
    this.getPlanetList();
  }

  getPlanetList(): void{
    this.planetService.getPlanetList().subscribe(resp =>{
      this.planets = resp.results;
    });
  }






}
