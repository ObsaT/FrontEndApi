import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BaseUrl = 'http://localhost:65058/api/Auth/';
  jwthelper = new JwtHelperService();
  decodeUser: any;
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typedef
  Login(model: any) {
   return this.http.post(this.BaseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodeUser = this.jwthelper.decodeToken(user.token);
          console.log(this.decodeUser);

        }
      })
    );
  }
  // tslint:disable-next-line: typedef
  Register(model: any)
  {
 return this.http.post(this.BaseUrl + 'register', model);
  }
 LoggeIn()
{
  const token = localStorage.getItem('token');
  return !this.jwthelper.isTokenExpired(token?.toString());
}
LogOut()
{
  const token = localStorage.getItem('token');
  if (token) {
    localStorage.removeItem('token');
  }
  return token;
}
}
