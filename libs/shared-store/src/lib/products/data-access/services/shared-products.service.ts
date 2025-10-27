import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ENDPOINTS } from '@angular-nx-ecom-wp/core';
import { catchError, EMPTY, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedProductsService {
  #http = inject(HttpClient);


  getCategories(): Observable<string[]>{
    return this.#http.get<string[]>(ENDPOINTS.PRODUCTS.GET_CATEGORIES).pipe(
      catchError(error => {
        console.log(error);
        return EMPTY
      })
    )
  }


}
