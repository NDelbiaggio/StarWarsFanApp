import { StarshipsService } from './../../services/api/starships.service';
import { Component } from '@angular/core';
import { Starship } from 'src/app/models/resources';
import { ListViewComponent } from '../listViewResource';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent extends ListViewComponent<Starship> {


  constructor(private starshipsService: StarshipsService) { 
    super(starshipsService);
  }

  loadStarships(pageNumber){
    super.loadData(pageNumber);
  }

}
