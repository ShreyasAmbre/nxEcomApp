import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../data-access/services/products.service';
import { Store } from '@ngrx/store';

import * as SharedProductActions from '@angular-nx-ecom-wp/shared-store';
import * as ProductSelectors from '@angular-nx-ecom-wp/shared-store';


@Component({
  selector: 'product-products',
  imports: [
    CommonModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {

  // #productService = inject(ProductsService);
  #store = inject(Store);

  allProducts = this.#store.select(ProductSelectors.selectAllProducts);
  allCategories = this.#store.select(ProductSelectors.selectCategories);

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllCategories(){
    // this.#productService.getCategories().subscribe(res => {
    //   console.log("RES =>", res);
    // })

    this.#store.dispatch(SharedProductActions.getCategory());

  }

  getAllProducts(){
    this.#store.dispatch(SharedProductActions.getAllProducts());
  }
}
