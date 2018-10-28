import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Species } from 'src/app/models/resources';

@Component({
  selector: 'app-species-table',
  templateUrl: './species-table.component.html',
  styleUrls: ['./species-table.component.scss']
})
export class SpeciesTableComponent {
  
  @Input('species') species: Species[];
  @Output('navigateTo') navigateTo: EventEmitter<string>;

  constructor() {
    this.navigateTo = new EventEmitter<string>();
  }

  navigateToDetails(speciesUrl: string){
    this.navigateTo.emit(speciesUrl);
  }

}
