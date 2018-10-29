import { Planet } from './../models/resources';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-planets-cards',
  templateUrl: './planets-cards.component.html',
  styleUrls: ['./planets-cards.component.scss']
})
export class PlanetsCardsComponent {

  @Input('planets') planets: Planet[];
  @Output('navigateTo') navigateTo: EventEmitter<string>;

  constructor() {
    this.navigateTo = new EventEmitter<string>();
  }

  navigateToDetails(url){
    this.navigateTo.emit(url);
  }

  getOverviewFiedls(planet:Planet): any[] {
    return [
      {name: 'Population', value: planet.population},
      {name: 'Diameter', value: `${planet.diameter} km`},
      {name: 'Terrain', value: `${planet.terrain}`},
      {name: 'Climate', value: planet.climate}
    ]
  }

}
