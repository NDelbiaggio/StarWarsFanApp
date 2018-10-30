import { PlanetDetailsComponent } from './details/planet-details/planet-details.component';
import { AuthGuard } from './services/auth-guard.service';
import { StarwarsResourcesComponent } from './lists/starwars-resources/starwars-resources.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FilmDetailsComponent } from './details/film-details/film-details.component';
import { SpeciesDetailsComponent } from './details/species-details/species-details.component';
import { PersonDetailsComponent } from './details/person-details/person-details.component';
import { StarshipDetailsComponent } from './details/starship-details/starship-details.component';
import { VehicleDetailsComponent } from './details/vehicle-details/vehicle-details.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
