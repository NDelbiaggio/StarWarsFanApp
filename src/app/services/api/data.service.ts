import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: HttpClient) { }

  protected getAll(page?: number, search?: string): Observable<any>{
    let completeUrl = this.url;
    if(page){completeUrl += `?page=${page}`};
    if(search){completeUrl += `?search=${search}`};
    return this.http.get(completeUrl);
  }
}
