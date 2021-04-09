import { logging } from 'protractor';
import { LoginService } from 'src/app/Service/login.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jwthelper = new JwtHelperService();

  constructor(private service: LoginService){}
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
     this.service.decodeUser = this.jwthelper.decodeToken(token);
    }
  }
  title = 'newTutor';
}
