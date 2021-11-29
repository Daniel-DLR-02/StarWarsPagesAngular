import { Gender } from './../../Interfaces/people';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Person } from 'src/app/Interfaces/people';
import { PeopleService } from 'src/app/Service/people.service';
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peopleList: Person[] = [];
  peopleListFiltered: Person[] = [];
  genderFormControl = new FormControl('');
  genderSelected : String[] = ["male","female","n/a"]

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(resp => {
      this.peopleList = resp.results;
    });
    this.peopleListFiltered=this.peopleList;
  }

  doFilter(){
      let genderSelected = this.genderFormControl.value;
      this.peopleListFiltered = this.peopleList.filter( p => p.gender == genderSelected);
  }

}
