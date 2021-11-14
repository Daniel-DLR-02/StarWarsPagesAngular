import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetListComponent } from './pages/planet-list/planet-list.component';
import { PlanetDetailsComponent } from './pages/planet-details/planet-details.component';

const routes: Routes = [
  { path: 'planets', component: PlanetListComponent },
  { path:'planets/:idPlanet', component: PlanetDetailsComponent },
  { path: '', pathMatch:'full',redirectTo:'/planets'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
