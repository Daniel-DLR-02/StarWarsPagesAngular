import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleResponse } from '../Interfaces/people';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(): Observable<PeopleResponse> {
    return this.http.get<PeopleResponse>('https://swapi.dev/api/people');
  }
}
