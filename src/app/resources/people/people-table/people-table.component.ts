import { Person } from 'src/app/models/resources';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent {

  @Input('people') people: Person[];
  @Output('navigateTo') navigateTo: EventEmitter<string>;

  constructor(
    private router: Router
  ) { 
    this.navigateTo = new EventEmitter<string>();
  }

  navigateToDetails(personUrl: string){
    this.navigateTo.emit(personUrl);
  }

}
