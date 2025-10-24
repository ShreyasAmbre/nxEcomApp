import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../data-access/services/products.service';
import { Store } from '@ngrx/store';

import * as ProductActions from '../data-access/state/products.actions';
import * as ProductSelectors from '../data-access/state/products.selectors';


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

  allCategories = this.#store.select(ProductSelectors.selectCategories);

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    // this.#productService.getCategories().subscribe(res => {
    //   console.log("RES =>", res);

    // })

    this.#store.dispatch(ProductActions.getCategory());

  }
}
