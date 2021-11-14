import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/Interfaces/people';

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

}
