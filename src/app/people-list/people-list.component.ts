import { Subscription } from 'rxjs';
import { PeopleService } from './../services/api/people.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from '../models/resources';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit, OnDestroy {

  private elemPerPage: number = 10;
  private nbPages: number;

  private people: Person[];
  private peopleSubscription: Subscription;

  constructor(private peopleService: PeopleService) {
    this.people = [];
  }

  ngOnInit() {
    this.loadPeople();
  }

  ngOnDestroy(){
    this.peopleSubscription.unsubscribe();
  }

  loadPeople(pageNumber = 1){
    if(this.peopleSubscription){
      this.peopleSubscription.unsubscribe();
    }
    this.peopleSubscription = this.peopleService.getPeople(pageNumber)
      .subscribe((res)=>{
        this.people = res.results;
        this.nbPages = Math.ceil(res.count/this.elemPerPage);
        console.log(res)
      });
  }

}
