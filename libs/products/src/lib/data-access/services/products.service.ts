import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '@angular-nx-ecom-wp/core';
import { catchError, EMPTY } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  #http = inject(HttpClient);


  getCategories(){
    return this.#http.get(ENDPOINTS.PRODUCTS.GET_CATEGORIES).pipe(
      catchError(error => {
        console.log(error);
        return EMPTY
      })
    )
  }


}
