import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FcxSideMenuComponent, TitleColor } from 'fcx-side-menu';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FcxSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fcx-testbed-app';

  TitleColor = TitleColor;
  isAuthenticated = signal(false);

  onLogin(): void {
    this.isAuthenticated.set(false);
  }

  onLogout(): void {
    this.isAuthenticated.set(true);
  }
}
