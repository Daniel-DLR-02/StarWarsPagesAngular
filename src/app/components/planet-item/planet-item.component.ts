import { Component, OnInit, Inject } from '@angular/core';
import { Input } from '@angular/core';
import { Planet } from 'src/app/Interfaces/planet';
import { PlanetDetailsDialogComponent } from 'src/app/dialogs/planet-details-dialog/planet-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { PlanetService } from 'src/app/Service/planet-service.service';
@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.css']
})
export class PlanetItemComponent implements OnInit {

  @Input() planetInput !: Planet;

  constructor(private dialog: MatDialog,
    private planetService : PlanetService) { }

  ngOnInit(): void {
  }

  openPlanetDetail() : void{
    this.dialog.open(PlanetDetailsDialogComponent, {
      height: '600px',
      width: '600px',
      data: { url: this.planetInput?.url }
    });
  }

  getPlanetId(url:string) : string{
    let planetaId=url.split('/');
    return planetaId[5];
  }



}
