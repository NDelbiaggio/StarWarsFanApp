import { Vehicle } from './../../models/resources';
import { VehiclesService } from './../../services/api/vehicles.service';
import { Component, OnInit } from '@angular/core';
import { ListViewComponent } from '../listViewResource';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent extends ListViewComponent<Vehicle> {

  constructor(private vehicleService: VehiclesService) { 
    super(vehicleService);
  }

  loadVehicules(pageNumber){
    super.loadData(pageNumber);
  }

}
