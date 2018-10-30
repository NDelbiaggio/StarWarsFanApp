import { Subscription } from 'rxjs';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/api/films.service';
import { Film } from 'src/app/models/resources';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit, OnDestroy {

  film: Film;

  filmSubscription: Subscription;

  constructor(
    private filmsService: FilmsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    let filmId = this.route.snapshot.paramMap.get('id');
    this.filmSubscription = this.filmsService.getFilm(filmId)
      .subscribe(film => this.film = film);
  }

  ngOnDestroy(){
    this.filmSubscription.unsubscribe();
  }

  backToResources(){
    this.router.navigate(['/resources']);
  }

}
