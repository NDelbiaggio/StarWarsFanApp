import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isValid: boolean = true;

  form: FormGroup;


  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    fb: FormBuilder
  ) { 
    this.form = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  login(credentials){
    this.authService.login(credentials)
      .then(result=>{
        if(result){
          let returnedUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnedUrl || '/']);
        }else{
          this.isValid = false;
        }
        this.form.reset();
    })
  }

}
