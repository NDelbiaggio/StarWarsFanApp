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

  searchPattern: String = "";

  constructor(
    private resourcesService: ResourcesService,
  ) { 
    this.categories = [];
  }

  ngOnInit() {
    this.resourceSubscription = this.resourcesService.getAll()
      .subscribe(categories =>{
        this.categories = categories;
      });
  }

  ngOnDestroy(){
    this.resourceSubscription.unsubscribe();
  }

}
