import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../models/resources';

@Component({
  selector: 'app-people-cards',
  templateUrl: './people-cards.component.html',
  styleUrls: ['./people-cards.component.scss']
})
export class PeopleCardsComponent {

  @Input('people') people: Person[];
  @Output('navigateTo') navigateTo: EventEmitter<string>;

  constructor() { 
    this.navigateTo = new EventEmitter<string>();
  }

  navigateToDetails(url){
    this.navigateTo.emit(url);
  }

  getOverviewFiedls(person:Person): any[] {
    return [
      {name: 'Gender', value: person.gender},
      {name: 'Height', value: `${person.height} cm`},
      {name: 'Mass', value: `${person.mass} kg`},
      {name: 'Birth year', value: person.birth_year}
    ]
  }

}
