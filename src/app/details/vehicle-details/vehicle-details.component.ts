import { VehiclesService } from 'src/app/services/api/vehicles.service';
import { Vehicle } from './../../models/resources';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  vehicle: Vehicle;

  vehicleSubscription: Subscription;

  constructor(
    private vehiclesService: VehiclesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let vehicleId = this.route.snapshot.paramMap.get('id');
    this.vehicleSubscription = this.vehiclesService.getVehicle(vehicleId)
      .subscribe(vehicle => {
        this.vehicle = vehicle;
      });
  }

  ngOnDestroy(){
    this.vehicleSubscription.unsubscribe();
  }

  backToResources(){
    this.router.navigate(['/resources']);
  }

}
