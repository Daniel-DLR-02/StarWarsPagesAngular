import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Interfaces/people';
import { PeopleService } from 'src/app/Service/people.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  id !: string;
  person !: Person;

  constructor(private activeRoute: ActivatedRoute,
    private planetService: PeopleService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(parametros => {
      this.id = parametros['idPerson'];
      this.planetService.getPersonById(this.id).subscribe(person => {
        this.person = person;
      });
    });
  }

}
