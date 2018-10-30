import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'StarWarsFanApp';

  isLoggedIn$: Observable<boolean>;

  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  ngOnInit(){
    this.isLoggedIn$ = this.authService.isLoggedInObservable();
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
