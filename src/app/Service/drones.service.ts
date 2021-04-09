import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DronesModel } from '../UtModule/Model/drones-model.model';
import { Organization } from '../UtModule/Model/organization.model';
@Injectable({
  providedIn: 'root'
})
export class DronesService {
  droneUrl: string = "http://localhost:65058/api/Drones";
  orgUrl: string = "http://localhost:65058/api/Organisations";

  drListist: DronesModel[] = [];
  orgList: Organization[] = [];


  public droneData: DronesModel = new DronesModel();
  organizationData: Organization = new Organization();

  constructor(private http: HttpClient) { }
  dronesDetail() {
    return this.http.get(this.droneUrl).toPromise().then(res => this.drListist = res as DronesModel[])
  }
  OrganizationDetail() {
    return this.http.get(this.orgUrl).toPromise().then(res => this.orgList = res as Organization[])

  }
  AddDrone(){
    return this.http.post(this.droneUrl, this.droneData);
  }
  AddOrganization(){
    return this.http.post(this.orgUrl, this.organizationData);
  }
  DeleteDrone(Id: number){
    var DeleteUrl =`${this.droneUrl}/${Id}`;
     return this.http.delete(DeleteUrl);
  }
  DeleteOrg(id:number){
    var DeleteUrl =`${this.orgUrl}/${id}`;
    return this.http.delete(DeleteUrl);
  }

  PutDrone(id: number)
  {
     return this.http.put(`${this.droneUrl}/${this.droneData.id}`, this.droneData);
  }
}
