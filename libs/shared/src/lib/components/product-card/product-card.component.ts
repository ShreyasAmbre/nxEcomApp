import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  productTitle = input.required<string>();
  productDescription = input.required<string>();
  productRating = input<number>(0);
  productPrice = input.required<number>();
  productImg = input.required<string>();
}
