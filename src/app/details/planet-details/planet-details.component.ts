import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/resources';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetsService } from 'src/app/services/api/planets.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.scss']
})
export class PlanetDetailsComponent implements OnInit {

  planet: Planet;

  planetSubscription: Subscription;

  constructor(
    private planetsService: PlanetsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let planetId = this.route.snapshot.paramMap.get('id');
    this.planetSubscription = this.planetsService.getPlanet(planetId)
      .subscribe(planet => {
        this.planet = planet;
        console.log(planet)
      });
  }

  ngOnDestroy(){
    this.planetSubscription.unsubscribe();
  }

  backToResources(){
    this.router.navigate(['/resources']);
  }

}
