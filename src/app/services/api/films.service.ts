import { Film } from './../../models/resources';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmsService  extends DataService {
  
  constructor(http: HttpClient) { 
    super(environment.api.films,http)
  }

  getFilms(page?: number, search?: string): Observable<any>{
    return super.getAll(page, search);
  }

  getFilm(id: string): Observable<Film>{
    return super.getOne(id);
  }
}
