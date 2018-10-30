
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Vehicle } from 'src/app/models/resources';

@Component({
  selector: 'app-vehicles-table',
  templateUrl: './vehicles-table.component.html',
  styleUrls: ['./vehicles-table.component.scss']
})
export class VehiclesTableComponent  {

  @Input('vehicles') vehicles: Vehicle[];
  @Output('navigateTo') navigateTo: EventEmitter<string>;

  constructor() { 
    this.navigateTo = new EventEmitter<string>();
  }

  navigateToDetails(vehicleUrl: string){
    this.navigateTo.emit(vehicleUrl);
  }

}
