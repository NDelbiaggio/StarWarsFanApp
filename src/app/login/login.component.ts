import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(credentials){
    this.authService.login(credentials)
      .then(result=>{
        if(result){
          let returnedUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnedUrl || '/']);
        }
        console.log(result);
    })
  }

}
