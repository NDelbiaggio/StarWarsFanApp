import { PeopleService } from './../services/api/people.service';
import { ResourcesService, Category } from './../services/api/resources.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-starwars-resources',
  templateUrl: './starwars-resources.component.html',
  styleUrls: ['./starwars-resources.component.scss']
})
export class StarwarsResourcesComponent implements OnInit, OnDestroy {

  private categories: Category[];

  private people;

  private resourceSubscription: Subscription;


  constructor(
    private resourcesService: ResourcesService,
    private peopleService: PeopleService
  ) { 
    this.categories = [];
    this.people = [];
  }

  ngOnInit() {
    this.resourceSubscription = this.resourcesService.getAll()
      .subscribe(categories =>{
        this.categories = categories;
      });

    this.peopleService.getPeople()
      .subscribe(people=>{
        this.people = people;
        console.log(this.people);
    });
  }

  ngOnDestroy(){
    this.resourceSubscription.unsubscribe();
  }

}
