import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { getProductsBasedonCategory, selectCategorizedProducts } from '@angular-nx-ecom-wp/shared-store';
import { ProductCardComponent } from '@angular-nx-ecom-wp/shared';

@Component({
  selector: 'product-categorized-products',
  imports: [
    CommonModule,
    ProductCardComponent
    ],
  templateUrl: './categorized-products.component.html',
  styleUrl: './categorized-products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategorizedProductsComponent implements OnInit {
  categoryName = input.required<string>();
  #store = inject(Store);


  categorizedProducts = this.#store.select(selectCategorizedProducts)


  ngOnInit(): void {
    this.getCategorizedProducts()
  }

  getCategorizedProducts(){
    this.#store.dispatch(getProductsBasedonCategory({ categoryName: this.categoryName() }))
  }






}
