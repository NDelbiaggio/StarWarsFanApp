import { Subscription } from 'rxjs';
import { PeopleService } from './../../services/api/people.service';
import { Component, OnInit, OnDestroy, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Person } from '../../models/resources';
import { ListViewComponent } from '../listViewResource';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent extends ListViewComponent<Person> {

  constructor(private peopleService: PeopleService) { 
    super(peopleService);
  }

  loadPeople(pageNumber){
    super.loadData(pageNumber);
  }

}
