import { Planet } from './../../models/resources';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService extends DataService {
  
  constructor(http: HttpClient) { 
    super(environment.api.planets, http)
  }

  getPlanets(page?: number, search?: string): Observable<any>{
    return super.getAll(page, search);
  }

  getPlanet(id: string): Observable<Planet>{
    return super.getOne(id);
  }
}
