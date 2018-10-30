
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListViewComponent } from 'src/app/lists/listViewResource';
import { SpeciesService } from 'src/app/services/api/species.service';
import { Species } from 'src/app/models/resources';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent extends ListViewComponent<Species> {

  display: string = "card";

  constructor(
    private speciesService: SpeciesService,
    private router: Router
  ) { 
    super(speciesService, "Species");
  }

  loadSpecies(pageNumber){
    super.loadData(pageNumber);
  }

  navigateToDetails(speciesUrl: String){
    let urlSplitted = speciesUrl.split('/');
    let speciesId =  urlSplitted[urlSplitted.length - 2];
    this.router.navigate(['/species',speciesId]);
  }

}
