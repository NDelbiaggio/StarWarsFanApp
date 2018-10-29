import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export abstract class DataService {

  constructor(private url: string, private http: HttpClient) { }

  /**
   * Retrieve by default the first page of the endpoint and returns an observale of the data.
   * The page number can be specified and also a pattern for retrieving specific data.
   * @param page 
   * @param search 
   * @returns Observable<any>
   */
  getAll(page = 1, search?: string): Observable<any>{
    let completeUrl = `${this.url}?page=${page}`;
    if(search){completeUrl += `&search=${search}`};
    return this.http.get(completeUrl).pipe(catchError(this.errorHandlerObservable));
  }

  /**
   * Call the endpoint with the received id and returns a unique Observable of an element
   * @param id 
   * @returns Observable<any>
   */
  getOne(id: string): Observable<any>{
    return this.http.get(`${this.url}/${id}`).pipe(catchError(this.errorHandlerObservable));
  }


  /**
   * Receives a array of endpoints and create a unique observable for all the calls.
   * Only when all the calls succeeded an array is returned with all the responses.
   * @param links 
   * @returns Observable<any[]>
   */
  getByLinks(links: []): Observable<any[]>{
    if(links.length == 0){
      return new Observable(observer =>{
        observer.next([]);
      })
    }
    let observables: Observable<any>[] = [];
    links.forEach(link => {
      observables.push(this.http.get(link));
    });
    return forkJoin(observables).pipe(catchError(this.errorHandlerObservable));
  }

  errorHandlerObservable(error: Response): Observable<any>{
    if(error.status == 404){
      console.log("endpoint not found");
    }else if(error.status == 503){
      console.log("The server had a problem, please contact your provider");
    } else{
      console.log("An unexpected error occured, please contatct your provider");
    }
    return of([]);
  }
}