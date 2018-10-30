import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListViewComponent } from 'src/app/lists/listViewResource';
import { FilmsService } from 'src/app/services/api/films.service';
import { Film } from 'src/app/models/resources';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent extends ListViewComponent<Film> {
  
  constructor(
    private filmsService: FilmsService,
    private router: Router
  ) { 
    super(filmsService, "Films")
  }

  loadFilms(pageNumber){
    super.loadData(pageNumber);
  }

  navigateToDetails(filmUrl: String){
    let urlSplitted = filmUrl.split('/');
    let filmId =  urlSplitted[urlSplitted.length - 2];
    this.router.navigate(['/films',filmId]);
  }

  getOverviewFiedls(film: Film){
    return [
      {name: 'Episode Id', value: film.episode_id},
      {name: 'Director', value: film.director},
      {name: 'Producer', value: film.producer},
    ]
  }

}
