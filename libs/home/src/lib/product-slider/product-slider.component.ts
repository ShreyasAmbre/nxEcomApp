import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'feature-home-product-slider',
  imports: [CommonModule],
  templateUrl: './product-slider.component.html',
  styleUrl: './product-slider.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductSliderComponent {}
