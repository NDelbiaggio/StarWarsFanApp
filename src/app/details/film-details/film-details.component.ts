import { Subscription } from 'rxjs';
import { Film, Person, Planet, Vehicle, Species, Starship } from './../../models/resources';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/api/films.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit, OnDestroy {

  film: Film;

  filmSubscription: Subscription;

  characters: Person[];
  planets: Planet[];
  vehicles: Vehicle[];
  species: Species[];
  starships: Starship[];

  constructor(
    private filmsService: FilmsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    let filmId = this.route.snapshot.paramMap.get('id');
    this.filmSubscription = this.filmsService.getFilm(filmId)
      .subscribe(film => {
        this.film = film;
        console.log(this.film)
        this.filmsService.getByLinks(this.film.planets)
          .subscribe(planets => this.planets = planets);

        this.filmsService.getByLinks(this.film.characters)
          .subscribe(characters =>this.characters = characters);

        this.filmsService.getByLinks(this.film.vehicles)
          .subscribe(vehicles => this.vehicles = vehicles);

        this.filmsService.getByLinks(this.film.species)
          .subscribe(species => this.species = species);

        this.filmsService.getByLinks(this.film.starships)
          .subscribe(starships => this.starships = starships);
        
      });
  }

  ngOnDestroy(){
    this.filmSubscription.unsubscribe();
  }

  backToResources(){
    this.router.navigate(['/resources']);
  }

}
