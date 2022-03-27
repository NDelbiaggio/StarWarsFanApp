import { AuthGuard } from './services/auth-guard.service';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FilmDetailsComponent } from './resources/films/film-details/film-details.component';
import { SpeciesDetailsComponent } from './resources/species/species-details/species-details.component';
import { VehicleDetailsComponent } from './resources/vehicles/vehicle-details/vehicle-details.component';
import { PlanetDetailsComponent } from './resources/planets/planet-details/planet-details.component';
import { PersonDetailsComponent } from './resources/people/person-details/person-details.component';
import { StarshipDetailsComponent } from './resources/starships/starship-details/starship-details.component';
import { StarwarsResourcesComponent } from './resources/starwars-resources/starwars-resources.component';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },{
    path: 'resources',
    component: StarwarsResourcesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'overview',
    component: StarwarsResourcesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'films/:id',
    component: FilmDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'species/:id',
    component: SpeciesDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'vehicles/:id',
    component: VehicleDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'planets/:id',
    component: PlanetDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'people/:id',
    component: PersonDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'starships/:id',
    component: StarshipDetailsComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: '', 
    redirectTo: '/resources', 
    pathMatch: 'full' 
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
