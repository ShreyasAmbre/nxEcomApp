import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'feature-auth-feature-auth',
  imports: [
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './feature-auth.component.html',
  styleUrl: './feature-auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureAuthComponent {}
