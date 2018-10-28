import { PlanetsService } from './../../services/api/planets.service';
import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { Planet } from 'src/app/models/resources';
import { Subscription } from 'rxjs';
import { ListViewComponent } from '../listViewResource';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent extends ListViewComponent<Planet> {

  constructor(
    private planetService: PlanetsService,
    private router: Router
  ) { 
    super(planetService);
  }

  loadPlanets(pageNumber){
    super.loadData(pageNumber);
  }

  navigateToDetails(planetUrl: String){
    let urlSplitted = planetUrl.split('/');
    let planetId =  urlSplitted[urlSplitted.length - 2];
    this.router.navigate(['/planets',planetId]);
  }
}
