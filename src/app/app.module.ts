import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './loader/loader.component';
import { PaginationBarComponent } from './pagination-bar/pagination-bar.component';

import { HeaderListComponent } from './lists/header-list/header-list.component';
import { ResourceOverviewComponent } from './resource-overview/resource-overview.component';
import { SpeciesCardsComponent } from './resources/species/species-cards/species-cards.component';
import { CardViewComponent } from './lists/card-view/card-view.component';

import { PeopleListComponent } from './resources/people/people-list/people-list.component';
import { PeopleCardsComponent } from './resources/people/people-cards/people-cards.component';
import { PeopleTableComponent } from './resources/people/people-table/people-table.component';
import { PersonDetailsComponent } from './resources/people/person-details/person-details.component';

import { SpeciesTableComponent } from './resources/species/species-table/species-table.component';
import { SpeciesListComponent } from './resources/species/species-list/species-list.component';
import { SpeciesDetailsComponent } from './resources/species/species-details/species-details.component';

import { PlanetsCardsComponent } from './resources/planets/planets-cards/planets-cards.component';
import { PlanetDetailsComponent } from './resources/planets/planet-details/planet-details.component';
import { PlanetsListComponent } from './resources/planets/planets-list/planets-list.component';
import { PlanetsTableComponent } from './resources/planets/planets-table/planets-table.component';

import { VehicleDetailsComponent } from './resources/vehicles/vehicle-details/vehicle-details.component';
import { VehiclesTableComponent } from './resources/vehicles/vehicles-table/vehicles-table.component';
import { VehiclesCardsComponent } from './resources/vehicles/vehicles-cards/vehicles-cards.component';
import { VehiclesListComponent } from './resources/vehicles/vehicles-list/vehicles-list.component';

import { StarshipsTableComponent } from './resources/starships/starships-table/starships-table.component';
import { StarshipsListComponent } from './resources/starships/starships-list/starships-list.component';
import { StarshipsCardsComponent } from './resources/starships/starships-cards/starships-cards.component';
import { StarshipDetailsComponent } from './resources/starships/starship-details/starship-details.component';

import { FilmsListComponent } from './resources/films/films-list/films-list.component';
import { FilmDetailsComponent } from './resources/films/film-details/film-details.component';
import { StarwarsResourcesComponent } from './resources/starwars-resources/starwars-resources.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginationBarComponent,
    LoaderComponent,
    StarwarsResourcesComponent,
    
    HeaderListComponent,
    PeopleListComponent,
    FilmsListComponent,
    PlanetsListComponent,
    VehiclesListComponent,
    SpeciesListComponent,
    StarshipsListComponent,
    
    FilmDetailsComponent,
    PersonDetailsComponent,
    PlanetDetailsComponent,
    SpeciesDetailsComponent,
    StarshipDetailsComponent,
    VehicleDetailsComponent,

    PeopleTableComponent,
    VehiclesTableComponent,
    StarshipsTableComponent,
    SpeciesTableComponent,
    PlanetsTableComponent,
    
    CardViewComponent, //Might be removed
    PeopleCardsComponent,
    SpeciesCardsComponent,
    VehiclesCardsComponent,
    StarshipsCardsComponent,
    PlanetsCardsComponent,

    ResourceOverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
