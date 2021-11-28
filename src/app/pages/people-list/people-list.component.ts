import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Interfaces/people';
import { PeopleService } from 'src/app/Service/people.service';
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peopleList: Person[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(resp => {
      this.peopleList = resp.results;
    });
  }


}
