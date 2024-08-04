import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { GuestLoginComponent } from './guest-login/guest-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeLoginComponent,
    GuestLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
