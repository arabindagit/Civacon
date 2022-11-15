import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LivetrackingComponent } from './livetracking/livetracking.component';
import { ReportsComponent } from './reports/reports.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AdministrationComponent } from './administration/administration.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LivetrackingComponent,
    ReportsComponent,
    AlertsComponent,
    AdministrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
