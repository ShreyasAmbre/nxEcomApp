import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainNavComponent } from '@angular-nx-ecom-wp/shared';

@Component({
  selector: 'feature-shell-main-layout',
  imports: [
    CommonModule,
    RouterOutlet,
    MainNavComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
