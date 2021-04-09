import { LoginService } from 'src/app/Service/login.service';
import { ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DronesService } from 'src/app/Service/drones.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() cancelregister = new EventEmitter();
registerMode = false;
name = '';
  constructor(public service: DronesService, private route: ActivatedRoute, private loginService: LoginService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }
loggedIn(){
 return this.loginService.LoggeIn();
}
registerToggle()
{
this.registerMode = !this.registerMode;
}
cancelregesterMode(registerMode: boolean){
this.registerMode = registerMode;
}
Cancel(){
  this.cancelregister.emit(false);
  }

}
