import { LoginService } from 'src/app/Service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public service: LoginService) { }

  ngOnInit(): void {
  }
  Logout()
  {
    this.service.LogOut();
  }
  LoggedIn() {
   return this.service.LoggeIn();
  }
  loggedout(){
    return !this.service.LoggeIn();
  }

}
