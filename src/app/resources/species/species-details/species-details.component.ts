
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Species } from 'src/app/models/resources';
import { SpeciesService } from 'src/app/services/api/species.service';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.scss']
})
export class SpeciesDetailsComponent implements OnInit, OnDestroy {

  species: Species;

  speciesSubscription: Subscription;

  constructor(
    private speciesService: SpeciesService,
    private route: ActivatedRoute,
    private router: Router
  ){ }

  ngOnInit() {
    let speciesId = this.route.snapshot.paramMap.get('id');
    this.speciesSubscription = this.speciesService.getOne(speciesId)
      .subscribe(species => {
        this.species = species;
        this.species.homeworld = [species.homeworld];
      });
  }

  ngOnDestroy(){
    this.speciesSubscription.unsubscribe();
  }

  backToResources(){
    this.router.navigate(['/resources']);
  }

}
