import { PlanetsService } from './../../services/api/planets.service';
import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { Planet } from 'src/app/models/resources';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements  OnChanges, OnDestroy {

  @Input('search') search: string;
  @Input('links') links: [];

  private elemPerPage: number = 10;
  private nbPages: number;

  private planets: Planet[];
  private planetsSubscription: Subscription;

  constructor(private planetsService: PlanetsService) { 
    this.planets = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.links){
      this.loadPlanetsFromLinks();
    }else{
      this.loadPlanets();
    }
  }

  ngOnDestroy(){
    this.planetsSubscription.unsubscribe();
  }

  loadPlanets(pageNumber = 1){
    if(this.planetsSubscription){
      this.planetsSubscription.unsubscribe();
    }
    this.planetsSubscription = this.planetsService.getPlanets(pageNumber, this.search)
      .subscribe((res)=>{
        this.planets = res.results;
        this.nbPages = Math.ceil(res.count/this.elemPerPage);
      });
  }

  loadPlanetsFromLinks(){
    this.planetsSubscription = this.planetsService.getByLinks(this.links)
          .subscribe(planets =>this.planets = planets);
  }



}
