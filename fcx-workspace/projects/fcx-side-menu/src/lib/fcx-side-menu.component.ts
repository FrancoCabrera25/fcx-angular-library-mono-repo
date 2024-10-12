import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500'
}

@Component({
  selector: 'lib-fcx-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './fcx-side-menu.component.html',
  styles: ``,
})
export class FcxSideMenuComponent {
  isAuthenticated = input(false);

  titleColor = input<TitleColor>(TitleColor.purple);

  title = input('FRC');
  signOut = output();
  signIn = output();
}
