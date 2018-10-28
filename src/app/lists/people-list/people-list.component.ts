import { PeopleService } from './../../services/api/people.service';
import { Component, OnInit, OnDestroy, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Person } from '../../models/resources';
import { ListViewComponent } from '../listViewResource';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent extends ListViewComponent<Person> {

  constructor(
    private peopleService: PeopleService,
    private router: Router
  ) { 
    super(peopleService);
  }

  loadPeople(pageNumber){
    super.loadData(pageNumber);
  }

  navigateToDetails(personUrl: String){
    let urlSplitted = personUrl.split('/');
    let personId =  urlSplitted[urlSplitted.length - 2];
    this.router.navigate(['/people',personId]);
  }

}

