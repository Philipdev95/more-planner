import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { GuestLoginComponent } from './guest-login/guest-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employee-login', component: EmployeeLoginComponent },
  { path: 'guest-login', component: GuestLoginComponent },
  // Lägg till dina andra vägar här
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
