import { PeopleService } from './../../services/api/people.service';
import { Component } from '@angular/core';
import { Person } from '../../models/resources';
import { ListViewComponent } from '../listViewResource';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent extends ListViewComponent<Person> {

  display: string = "card";

  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) {
    super(peopleService, "People");
  }

  loadPeople(pageNumber){
    super.loadData(pageNumber);
  }

  toggleDisplay(){
    this.display = this.display == 'card'? 'table': 'card';
  }

  navigateToDetails(personUrl: String){
    let urlSplitted = personUrl.split('/');
    let personId =  urlSplitted[urlSplitted.length - 2];
    this.router.navigate(['/people',personId]);
  }

}

