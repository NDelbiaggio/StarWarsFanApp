
import { Component } from '@angular/core';
import { Planet } from 'src/app/models/resources';
import { Router } from '@angular/router';
import { ListViewComponent } from 'src/app/lists/listViewResource';
import { PlanetsService } from 'src/app/services/api/planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent extends ListViewComponent<Planet> {

  display: string = "card";

  constructor(
    private planetService: PlanetsService,
    private router: Router
  ) { 
    super(planetService, "Planets");
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
