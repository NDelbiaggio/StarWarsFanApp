import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USERNAME = "admin";
  private PASSWORD = "1234";
  private TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MTU1OTQyNDMxNX0.0NG_3IfiMs2OY9JcuFRH1OQsddff1naXgN5KeuAY238";

  constructor() { }

  login(credentials): Promise<boolean>{
    return new Promise<boolean>((resolve, reject)=>{
      setTimeout(() => {
        if(credentials.username == this.USERNAME && credentials.password == this.PASSWORD){
          localStorage.setItem('token', this.TOKEN);
          resolve(true);
        }else{
          resolve(false);
        }
      }, 300);
    })
  }

  logout(){
    localStorage.removeItem('token');
  }

  isLoggedIn(){
    const helper = new JwtHelperService();
    let token = localStorage.getItem('token');
    if(!token || token != this.TOKEN){
      return false;
    }
    const isExpired = helper.isTokenExpired(token);
    return !isExpired;
  }
}
