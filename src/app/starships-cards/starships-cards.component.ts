import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Starship } from '../models/resources';

@Component({
  selector: 'app-starships-cards',
  templateUrl: './starships-cards.component.html',
  styleUrls: ['./starships-cards.component.scss']
})
export class StarshipsCardsComponent {

  @Input('starships') starships: Starship[];
  @Output('navigateTo') navigateTo: EventEmitter<string>;

  constructor() {
    this.navigateTo = new EventEmitter<string>();
  }

  navigateToDetails(url){
    this.navigateTo.emit(url);
  }

  getOverviewFiedls(starship: Starship): any[] {
    return [
      {name: 'Model', value: starship.model},
      {name: 'Starship class', value: `${starship.starship_class}`},
      {name: 'Manufacturer', value: `${starship.manufacturer}`},
      {name: 'Length', value: `${starship.length} m`},
      {name: 'Crew', value: `${starship.crew}`},
      {name: 'Passengers', value: `${starship.passengers}`}
    ]
  }

}
