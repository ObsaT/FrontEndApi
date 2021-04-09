import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DronesService } from '../Service/drones.service';

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.css']
})
export class OrganizationFormComponent implements OnInit {

  constructor(public service: DronesService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm)
  {
     this.service.AddOrganization().subscribe(
       res =>{
         form.resetForm();
       },
       err => {console.log(err)}
     );
  }
}
