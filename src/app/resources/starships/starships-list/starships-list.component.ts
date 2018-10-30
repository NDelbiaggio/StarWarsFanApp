
import { Component } from '@angular/core';
import { Starship } from 'src/app/models/resources';
import { Router } from '@angular/router';
import { ListViewComponent } from 'src/app/lists/listViewResource';
import { StarshipsService } from 'src/app/services/api/starships.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss']
})
export class StarshipsListComponent extends ListViewComponent<Starship> {

  display: string = "card";

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
