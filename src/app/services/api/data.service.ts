import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export abstract class DataService {

  constructor(private url: string, private http: HttpClient) { }

  getAll(page = 1, search?: string): Observable<any>{
    let completeUrl = `${this.url}?page=${page}`;
    if(search){completeUrl += `&search=${search}`};
    return this.http.get(completeUrl);
  }

  getOne(id: string): Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }

  getByLinks(links: []){
    let observables: Observable<any>[] = [];
    links.forEach(link => {
      observables.push(this.http.get(link));
    });
    return forkJoin(observables);
  }
}
