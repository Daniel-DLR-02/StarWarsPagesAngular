import { Component, OnInit, Inject } from '@angular/core';
import { Input } from '@angular/core';
import { Planet } from 'src/app/Interfaces/planet';
import { PlanetDetailsComponent } from 'src/app/dialogs/planet-details/planet-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-planet-item',
  templateUrl: './planet-item.component.html',
  styleUrls: ['./planet-item.component.css']
})
export class PlanetItemComponent implements OnInit {

  @Input() planetInput !: Planet;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openPlanetDetail(url: string) : void{
    this.dialog.open(PlanetDetailsComponent, {
      height: '600px',
      width: '600px',
      data: { url: this.planetInput?.url }
    });
  }

}
