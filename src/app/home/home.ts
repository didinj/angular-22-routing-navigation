import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private readonly router = inject(Router);

  goToAbout(): void {
    this.router.navigate(['/about']);
  }

  goToContact(): void {
    this.router.navigateByUrl('/contact');
  }

  goToAboutWithQuery(): void {
    this.router.navigate(['/about'], {
      queryParams: {
        source: 'home',
        version: 22
      }
    });
  }

  goToNextPage(): void {
    this.router.navigate(['/products'], {
      queryParams: {
        page: 3
      },
      queryParamsHandling: 'merge'
    });
  }
}
