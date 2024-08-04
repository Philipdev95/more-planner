import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) { }

  login(role: string) {
    if (role === 'employee') {
      // Logik för att logga in som anställd
      this.router.navigate(['/employee-login']);
    } else if (role === 'guest') {
      // Logik för att logga in som gäst
      this.router.navigate(['/guest-login']);
    }
  }
}
