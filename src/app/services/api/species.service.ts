import { Species } from './../../models/resources';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService extends DataService {
  
  constructor(http: HttpClient) { 
    super(environment.api.species,http)
  }

  getSpecies(page?: number, search?: string): Observable<any>{
    return super.getAll(page, search);
  }

  getOneSpecies(id: string): Observable<Species>{
    return super.getOne(id);
  }

}
