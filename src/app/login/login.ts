import { Component, inject } from '@angular/core';
import { Auth } from '../auth';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  private readonly authService = inject(Auth);
  private readonly router = inject(Router);

  login(): void {
    this.authService.login();
    this.router.navigateByUrl('/admin');
  }
}
