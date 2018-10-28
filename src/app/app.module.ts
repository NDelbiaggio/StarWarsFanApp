import { PaginationBarComponent } from './pagination-bar/pagination-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StarwarsResourcesComponent } from './lists/starwars-resources/starwars-resources.component';
import { PeopleListComponent } from './lists/people-list/people-list.component';
import { FilmsListComponent } from './lists/films-list/films-list.component';
import { PlanetsListComponent } from './lists/planets-list/planets-list.component';
import { FilmDetailsComponent } from './details/film-details/film-details.component';
import { VehiclesListComponent } from './lists/vehicles-list/vehicles-list.component';
import { SpeciesListComponent } from './lists/species-list/species-list.component';
import { StarshipsListComponent } from './lists/starships-list/starships-list.component';
import { PersonDetailsComponent } from './details/person-details/person-details.component';
import { PlanetDetailsComponent } from './details/planet-details/planet-details.component';
import { SpeciesDetailsComponent } from './details/species-details/species-details.component';
import { StarshipDetailsComponent } from './details/starship-details/starship-details.component';
import { VehicleDetailsComponent } from './details/vehicle-details/vehicle-details.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StarwarsResourcesComponent,
    PeopleListComponent,
    PaginationBarComponent,
    FilmsListComponent,
    FilmDetailsComponent,
    PlanetsListComponent,
    VehiclesListComponent,
    SpeciesListComponent,
    StarshipsListComponent,
    PersonDetailsComponent,
    PlanetDetailsComponent,
    SpeciesDetailsComponent,
    StarshipDetailsComponent,
    VehicleDetailsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
