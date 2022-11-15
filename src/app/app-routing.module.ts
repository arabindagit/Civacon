import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { AlertsComponent  } from './alerts/alerts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LivetrackingComponent } from './livetracking/livetracking.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {component:AdministrationComponent,path:'administration'},
  {component:AlertsComponent ,path:'alerts'},
  {component:DashboardComponent,path:'dashboard'},
  {component:LivetrackingComponent,path:'livetracking'},
  {component:ReportsComponent,path:'reports'},
  {component:LoginComponent,path:'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
