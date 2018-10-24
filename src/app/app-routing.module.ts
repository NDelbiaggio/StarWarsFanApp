import { AuthGuard } from './services/auth-guard.service';
import { StarwarsResourcesComponent } from './starwars-resources/starwars-resources.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

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
    path: '', 
    redirectTo: '/resources', 
    pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
