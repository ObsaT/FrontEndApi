import { RegisterComponent } from './Authenthication/register/register.component';
import { LoginComponent } from './Authenthication/login/login.component';
import { HomeComponent } from './Authenthication/home/home.component';
import { OrganizationListComponent } from './UtModule/organization-list/organization-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DronesFormComponent } from './UtModule/drones-form/drones-form.component';
import { ListDroneComponent } from './UtModule/Dronelist/list-drone.component';
import { EditDroneComponent } from './UtModule/edit-drone/edit-drone.component';
import { OrganizationFormComponent } from './organization-form/organization-form.component';

const routes: Routes = [
  { path: '#', component: HomeComponent },
  { path: 'drone', component: DronesFormComponent },
  { path: 'organization', component: OrganizationFormComponent },
{ path: 'droneList', component: ListDroneComponent },
{ path: 'organizationList', component: OrganizationListComponent },
{ path: 'editDrone', component: EditDroneComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{path: '**', component: HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
