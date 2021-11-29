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
import { PeopleDetailsComponent } from './pages/people-details/people-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlanetItemComponent,
    PlanetListComponent,
    PlanetDetailsDialogComponent,
    PlanetDetailsComponent,
    PersonItemComponent,
    PeopleListComponent,
    PeopleDetailsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
