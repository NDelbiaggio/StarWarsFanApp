import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private USERNAME = "admin";
  private PASSWORD = "1234";
  private TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE1NTk0MjQzMTV9.jXqvXG9yCt_UlDV53BNAld7lGwS7KVXraywuptImcsc";

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
    console.log('token: ', token)
    if(!token){
      return false;
    }
    const isExpired = helper.isTokenExpired(token);
    return !isExpired;
  }
}
