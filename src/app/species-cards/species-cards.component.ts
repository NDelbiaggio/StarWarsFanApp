import { Species } from 'src/app/models/resources';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-species-cards',
  templateUrl: './species-cards.component.html',
  styleUrls: ['./species-cards.component.scss']
})
export class SpeciesCardsComponent {

  @Input('species') species: Species[];
  @Output('navigateTo') navigateTo: EventEmitter<string>;

  constructor() {
    this.navigateTo = new EventEmitter<string>();
  }

  navigateToDetails(url){
    this.navigateTo.emit(url);
  }

  getOverviewFiedls(species: Species): any[] {
    return [
      {name: 'Classification', value: species.classification},
      {name: 'Designation', value: `${species.designation}`},
      {name: 'Average height', value: `${species.average_height}`},
      {name: 'Average lifespan', value: species.average_lifespan},
      {name: 'Language', value: species.language},
    ]
  }

}
