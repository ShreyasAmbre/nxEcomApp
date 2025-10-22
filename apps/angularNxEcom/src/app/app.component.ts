import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainNavComponent } from '@angular-nx-ecom-wp/shared';

@Component({
  imports: [
    RouterModule,
    MainNavComponent
  ],
  selector: 'ecom-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angularNxEcom';
}
