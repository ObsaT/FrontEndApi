
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DronesService } from 'src/app/Service/drones.service';

@Component({
  selector: 'app-drones-form',
  templateUrl: './drones-form.component.html',
  styleUrls: ['./drones-form.component.css']
})
export class DronesFormComponent implements OnInit {

  constructor(public service: DronesService, private route: ActivatedRoute) { }
  CurrentCatagory: number= 16;
  Redirect: string ='droneList';
  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.ListDrones();
  });
}

ListDrones(){
  //var hasCatagory: boolean = this.route.snapshot.paramMap.has('id');
  this.service.dronesDetail();
  this.service.OrganizationDetail();
}

onSubmit(form: NgForm) {
  if (this.service.droneData.id==0) {
    this.service.AddDrone().subscribe(
    res=>{
      form.resetForm();
      this.service.droneData.id==0
    },
    err => {console.log(err)}
  ) // false
  }
  else {
    this.EditRecord(form);
    form.resetForm();
  }
}

EditRecord(form: NgForm)
{
  this.service.PutDrone(this.service.droneData.id).subscribe(
    res=>{
      form.resetForm();
      alert('successfully Updated')
    },
    err => {console.log(err)}
  ) // false
}

}
