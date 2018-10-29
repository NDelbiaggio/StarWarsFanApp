import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoaderComponent } from './loader/loader.component';
import { PaginationBarComponent } from './pagination-bar/pagination-bar.component';

import { StarwarsResourcesComponent } from './lists/starwars-resources/starwars-resources.component';
import { HeaderListComponent } from './lists/header-list/header-list.component';
import { PeopleListComponent } from './lists/people-list/people-list.component';
import { FilmsListComponent } from './lists/films-list/films-list.component';
import { PlanetsListComponent } from './lists/planets-list/planets-list.component';
import { VehiclesListComponent } from './lists/vehicles-list/vehicles-list.component';
import { SpeciesListComponent } from './lists/species-list/species-list.component';
import { StarshipsListComponent } from './lists/starships-list/starships-list.component';

import { FilmDetailsComponent } from './details/film-details/film-details.component';
import { PersonDetailsComponent } from './details/person-details/person-details.component';
import { PlanetDetailsComponent } from './details/planet-details/planet-details.component';
import { SpeciesDetailsComponent } from './details/species-details/species-details.component';
import { StarshipDetailsComponent } from './details/starship-details/starship-details.component';
import { VehicleDetailsComponent } from './details/vehicle-details/vehicle-details.component';

import { PeopleTableComponent } from './lists/people-table/people-table.component';
import { VehiclesTableComponent } from './lists/vehicles-table/vehicles-table.component';
import { StarshipsTableComponent } from './lists/starships-table/starships-table.component';
import { SpeciesTableComponent } from './lists/species-table/species-table.component';
import { PlanetsTableComponent } from './lists/planets-table/planets-table.component';

import { CardViewComponent } from './lists/people-cards/card-view.component';
import { PeopleCardsComponent } from './people-cards/people-cards.component';
import { SpeciesCardsComponent } from './species-cards/species-cards.component';
import { VehiclesCardsComponent } from './vehicles-cards/vehicles-cards.component';
import { StarshipsCardsComponent } from './starships-cards/starships-cards.component';
import { PlanetsCardsComponent } from './planets-cards/planets-cards.component';

import { ResourceOverviewComponent } from './resource-overview/resource-overview.component';


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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
