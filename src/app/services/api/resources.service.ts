import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Category{
  name: string,
  endpoint: string
}

@Injectable({
  providedIn: 'root'
})
export class ResourcesService extends DataService{

  constructor(http: HttpClient) { 
    super(environment.api.resources,http)
  }

  getAll(): Observable<Category[]>{
    return super.getAll()
      .pipe(map(res =>{
      return Object.keys(res).map(key =>{
        return <Category>{name: key, endpoint: res[key]};
      });
    }));
  }

}
