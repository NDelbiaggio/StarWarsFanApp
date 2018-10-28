import { StarshipsService } from './../../services/api/starships.service';
import { Component } from '@angular/core';
import { Starship } from 'src/app/models/resources';
import { ListViewComponent } from '../listViewResource';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent extends ListViewComponent<Starship> {


  constructor(
    private starshipsService: StarshipsService,
    private router: Router
  ) { 
    super(starshipsService, "Starships");
  }

  loadStarships(pageNumber){
    super.loadData(pageNumber);
  }

  navigateToDetails(starhipUrl: String){
    let urlSplitted = starhipUrl.split('/');
    let starshipId =  urlSplitted[urlSplitted.length - 2];
    this.router.navigate(['/starships', starshipId]);
  }

}
