import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planets } from '../Interfaces/planet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  getPlanetList(): Observable<Planets>{
    return this.http.get<Planets>(`https://swapi.dev/api/planets/`);
  }
}
