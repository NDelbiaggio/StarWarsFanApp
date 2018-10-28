import { Person } from './../../models/resources';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeopleService extends DataService {
  
  constructor(http: HttpClient) { 
    super(environment.api.people,http)
  }

  getPeople(page?: number, search?: string): Observable<any>{
    return super.getAll(page, search);
      // .pipe(map(res => res.results));
  }

  getPerson(id: string): Observable<Person>{
    return super.getOne(id);
  }
}
