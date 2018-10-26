import { Vehicle } from './../../models/resources';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService extends DataService {
  
  constructor(http: HttpClient) { 
    super(environment.api.vehicles,http)
  }

  getVehicles(page?: number, search?: string): Observable<any>{
    return super.getAll(page, search);
  }

  getVehicle(id: string): Observable<Vehicle>{
    return super.getOne(id);
  }
}
