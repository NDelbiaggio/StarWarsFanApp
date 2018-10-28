import { Starship } from 'src/app/models/resources';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-starships-table',
  templateUrl: './starships-table.component.html',
  styleUrls: ['./starships-table.component.scss']
})
export class StarshipsTableComponent {

  @Input('starships') starships: Starship[];
  @Output('navigateTo') navigateTo: EventEmitter<string>;

  constructor() { 
    this.navigateTo = new EventEmitter<string>();
  }

  navigateToDetails(starshipUrl: string){
    this.navigateTo.emit(starshipUrl);
  }

}
