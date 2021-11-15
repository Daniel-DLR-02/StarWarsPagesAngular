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
import { PersonItemComponent } from './components/person-item/person-item.component';
import { PeopleListComponent } from './pages/people-list/people-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    PlanetItemComponent,
    PlanetListComponent,
    PlanetDetailsDialogComponent,
    PlanetDetailsComponent,
    PersonItemComponent,
    PeopleListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
