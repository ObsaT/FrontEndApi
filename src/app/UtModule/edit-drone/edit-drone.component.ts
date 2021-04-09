import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DronesService } from 'src/app/Service/drones.service';

@Component({
  selector: 'app-edit-drone',
  templateUrl: './edit-drone.component.html',
  styleUrls: ['./edit-drone.component.css']
})
export class EditDroneComponent implements OnInit {

  constructor(public service: DronesService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log(form.value);  // { first: '', last: '' }
    this.service.AddDrone().subscribe(
      res=>{
        form.resetForm();
      },
      err => {console.log(err)}
    ) // false
  }
}
