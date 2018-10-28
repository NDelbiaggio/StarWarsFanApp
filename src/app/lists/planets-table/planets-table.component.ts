import { Planet } from './../../models/resources';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.scss']
})
export class PlanetsTableComponent  {

  @Input('planets') planets: Planet[];
  @Output('navigateTo') navigateTo: EventEmitter<string>;

  constructor() {
    this.navigateTo = new EventEmitter<string>();
  }

  navigateToDetails(vehicleUrl: string){
    this.navigateTo.emit(vehicleUrl);
  }

}
