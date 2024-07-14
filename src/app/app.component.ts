import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showHeader = true;
  showVoltar = true;

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((retorno) => {
      if (retorno instanceof NavigationEnd) {
        this.showHeader = !this.router.url.includes('login');
        this.showVoltar =
          !this.router.url.includes('login') &&
          !this.router.url.includes('home');
      }
    });
  }

  voltar() {
    this.location.back();
  }
}
