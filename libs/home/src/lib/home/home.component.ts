import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as SharedProductActions from '@angular-nx-ecom-wp/shared-store';
import * as ProductSelectors from '@angular-nx-ecom-wp/shared-store';

@Component({
  selector: 'lib-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  #store = inject(Store);

  allProducts = this.#store.select(ProductSelectors.selectAllProducts);
  allCategories = this.#store.select(ProductSelectors.selectCategories);

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllCategories(){
    this.#store.dispatch(SharedProductActions.getCategory());
  }

  getAllProducts(){
    this.#store.dispatch(SharedProductActions.getAllProducts());
  }



}
