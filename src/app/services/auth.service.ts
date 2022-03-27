import { Injectable, EventEmitter } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private USERNAME = "admin";
  private PASSWORD = "1234";
  private TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJpYXQiOjE5MTYyMzkwMjIsImV4cCI6MjA1OTQyNDMxNX0.1p4XO404q4HLngf7z5tYCGOH_ebX0lbeHKNpmDLQluI";

  userStatus: EventEmitter<boolean>;

  constructor() {
    this.userStatus = new EventEmitter<boolean>();
  }

  login(credentials): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        if (
          credentials.username == this.USERNAME &&
          credentials.password == this.PASSWORD
        ) {
          localStorage.setItem("token", this.TOKEN);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 300);
    });
  }

  logout() {
    localStorage.removeItem("token");
    this.userStatus.emit(false);
  }

  isLoggedIn() {
    const helper = new JwtHelperService();
    let token = localStorage.getItem("token");
    if (!token || token != this.TOKEN) {
      return false;
    }
    const isExpired = helper.isTokenExpired(token);
    if (!isExpired) {
      this.userStatus.emit(true);
      return true;
    } else {
      this.userStatus.emit(false);
      return false;
    }
  }

  isLoggedInObservable(): Observable<boolean> {
    return this.userStatus.asObservable();
  }
}
