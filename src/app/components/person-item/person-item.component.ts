import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/Interfaces/people';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {
  @Input() person!: Person;

  constructor() { }

  ngOnInit(): void {
  }

  getPersonId(url: String){
    let urlSplited = url.split('/');
    return urlSplited[5];
  }

  getCharacterImageUrl(person: Person) {
    return `${environment.imageBaseUrl}${this.getPersonId(person.url)}.jpg`;
  }

}
