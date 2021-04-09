import { LoginService } from 'src/app/Service/login.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DronesService } from 'src/app/Service/drones.service';
import { DronesModel } from '../Model/drones-model.model';

@Component({
  selector: 'app-list-drone',
  templateUrl: './list-drone.component.html',
  styleUrls: ['./list-drone.component.css']
})
export class ListDroneComponent implements OnInit {

  constructor(public service: DronesService, public loginservice: LoginService) { }
  ngOnInit(): void {
    this.service.dronesDetail();
  }
  DeleteDrone(id: number) {

    if (confirm('are you sure to delete this record') == true) {
      this.service.DeleteDrone(id).subscribe(
        res => {
          this.service.dronesDetail();
        },
        err => { console.log(err) }
      );
      this.service.droneData;
    }
  }
  PopulateData(record: DronesModel){
  this.service.droneData=record;
  }
  Islogin(){
    this.loginservice.LoggeIn();
  }
}
