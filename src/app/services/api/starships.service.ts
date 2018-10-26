import { Starship } from './../../models/resources';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService extends DataService {
  
  constructor(http: HttpClient) { 
    super(environment.api.starships,http)
  }

  getSpecies(page?: number, search?: string): Observable<any>{
    return super.getAll(page, search);
  }

  getOneSpecies(id: string): Observable<Starship>{
    return super.getOne(id);
  }

}
