import { Vehicle } from './../models/resources';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vehicles-cards',
  templateUrl: './vehicles-cards.component.html',
  styleUrls: ['./vehicles-cards.component.scss']
})
export class VehiclesCardsComponent {

  @Input('vehicles') vehicles: Vehicle[];
  @Output('navigateTo') navigateTo: EventEmitter<string>;

  constructor() {
    this.navigateTo = new EventEmitter<string>();
  }

  navigateToDetails(url){
    this.navigateTo.emit(url);
  }

  getOverviewFiedls(vehicle: Vehicle): any[] {
    return [
      {name: 'Model', value: vehicle.model},
      {name: 'Vehicle class', value: `${vehicle.vehicle_class}`},
      {name: 'Manufacturer', value: `${vehicle.manufacturer}`},
      {name: 'Length', value: `${vehicle.length} m`},
      {name: 'Crew', value: `${vehicle.crew}`},
      {name: 'Passengers', value: `${vehicle.passengers}`}
    ]
  }
}
