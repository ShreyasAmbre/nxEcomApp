import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'feature-shell-feature-shell',
  imports: [CommonModule],
  templateUrl: './feature-shell.component.html',
  styleUrl: './feature-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureShellComponent {}
