import { Vehicle } from './../../models/resources';
import { VehiclesService } from './../../services/api/vehicles.service';
import { Component, OnInit } from '@angular/core';
import { ListViewComponent } from '../listViewResource';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent extends ListViewComponent<Vehicle> {

  display: string = "card";

  constructor(
    private vehicleService: VehiclesService,
    private router: Router
  ) { 
    super(vehicleService, "Vehicles");
  }

  loadVehicules(pageNumber){
    super.loadData(pageNumber);
  }

  navigateToDetails(vehicleUrl: String){
    let urlSplitted = vehicleUrl.split('/');
    let vehicleId =  urlSplitted[urlSplitted.length - 2];
    this.router.navigate(['/vehicles', vehicleId]);
  }

}
