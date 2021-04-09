import { LoginService } from 'src/app/Service/login.service';
import { Component, OnInit } from '@angular/core';
import { DronesService } from 'src/app/Service/drones.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(public service: DronesService, private loginservice: LoginService) { }

  ngOnInit(): void {
    this.service.orgList;
  }
  Islogin(){
    !this.loginservice.LoggeIn();
  }
  Logout() {
    const token = localStorage.getItem('token');
    localStorage.removeItem('token');
    console.log('logged Out Succeessfully');

  }
}
