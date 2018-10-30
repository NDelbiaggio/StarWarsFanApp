import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from './../../services/api/people.service';
import { ResourcesService, Category } from './../../services/api/resources.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-starwars-resources',
  templateUrl: './starwars-resources.component.html',
  styleUrls: ['./starwars-resources.component.scss']
})
export class StarwarsResourcesComponent implements OnInit, OnDestroy {

  private categories: Category[];
  private resourceSubscription: Subscription;

  private filter: string[];
  searchPattern: String = "";

  constructor(
    private resourcesService: ResourcesService,
  ) { 
    this.categories = [];
    this.filter = [];
  }

  ngOnInit() {
    this.resourceSubscription = this.resourcesService.getAll()
      .subscribe(categories =>{
        this.categories = categories;
      });
  }

  updateFilter(category: string){
    let ind = this.filter.findIndex(cat => cat == category);
    if(ind != -1){
      this.filter.splice(ind, 1);
    }else{
      this.filter.push(category);
    }    
  }

  hasToBeDisplayed(category: string): boolean{
    return this.filter.findIndex(cat=>cat == category) != -1;
  }

  ngOnDestroy(){
    this.resourceSubscription.unsubscribe();
  }

}