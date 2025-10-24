import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../data-access/services/products.service';

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

  #productService = inject(ProductsService);

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.#productService.getCategories().subscribe(res => {
      console.log("RES =>", res);

    })
  }
}
