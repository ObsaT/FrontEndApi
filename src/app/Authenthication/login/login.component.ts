import { Route } from '@angular/compiler/src/core';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  name = '';
  registerMode = false;
  constructor(public Service: LoginService, private loginService: LoginService, private route: ActivatedRoute,
    private routein: Router) { }
  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  login() {
    this.Service.Login(this.model).subscribe(
      next => {
     this.routein.navigate(['/register']);
      },
      err => {
        alert(err.title);
        console.log(err.title);
      }
    );
  }
  // tslint:disable-next-line: typedef
  LoggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  // tslint:disable-next-line: typedef
  logout() {
    localStorage.removeItem('token');
  }
  cancelregesterMode(registerMode: boolean) {
    this.registerMode = !registerMode;
  }
  IsLoggedIn(){
  return !this.loginService.LoggeIn();
  }
}

