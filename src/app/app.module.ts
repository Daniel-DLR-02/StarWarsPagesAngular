import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetItemComponent } from './components/planet-item/planet-item.component';
import { PlanetListComponent } from './pages/planet-list/planet-list.component';
import { PlanetDetailsDialogComponent } from './dialogs/planet-details-dialog/planet-details-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetDetailsComponent } from './pages/planet-details/planet-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetItemComponent,
    PlanetListComponent,
    PlanetDetailsDialogComponent,
    PlanetDetailsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
