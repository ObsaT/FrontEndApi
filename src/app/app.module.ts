import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DronesFormComponent } from './UtModule/drones-form/drones-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { ListDroneComponent } from './UtModule/Dronelist/list-drone.component';
import {FormsModule, NgForm} from '@angular/forms';
import { OrganizationFormComponent } from './organization-form/organization-form.component';
import { OrganizationListComponent } from './UtModule/organization-list/organization-list.component';
import { EditDroneComponent } from './UtModule/edit-drone/edit-drone.component';
import { SidenavComponent } from './UtModule/Shared/sidenav/sidenav.component';
import { MenuComponent } from './UtModule/Shared/menu/menu.component';
import { LoginComponent } from './Authenthication/login/login.component';
import { HomeComponent } from './Authenthication/home/home.component';
import { RegisterComponent } from './Authenthication/register/register.component';
import { DronesService } from './Service/drones.service';
import { LoginService } from './Service/login.service';

@NgModule({
  declarations: [
    AppComponent,
    DronesFormComponent,
    MyNavComponent,
    ListDroneComponent,
    OrganizationFormComponent,
    OrganizationListComponent,
    EditDroneComponent,
    SidenavComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,

  ],
  providers: [DronesService,
  LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
