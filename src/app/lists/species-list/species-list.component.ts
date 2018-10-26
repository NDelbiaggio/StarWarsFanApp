import { SpeciesService } from './../../services/api/species.service';
import { Species } from './../../models/resources';
import { Component, OnInit } from '@angular/core';
import { ListViewComponent } from '../listViewResource';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss']
})
export class SpeciesListComponent extends ListViewComponent<Species> {

  constructor(private speciesService: SpeciesService) { 
    super(speciesService);
  }

  loadSpecies(pageNumber){
    super.loadData(pageNumber);
  }

}
