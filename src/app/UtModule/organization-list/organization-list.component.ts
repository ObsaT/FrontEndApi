import { Component, OnInit } from '@angular/core';
import { DronesService } from 'src/app/Service/drones.service';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {

  constructor(public service: DronesService) { }

  ngOnInit(): void {
    this.service.OrganizationDetail();
  }
  onDelete(id:number){
    this.service.DeleteOrg(id).subscribe(
      res=>{
        this.service.OrganizationDetail();

      },
      err=>{
        console.log(err);
      }
    );
    this.service.droneData;
  }
}
