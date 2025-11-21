import { inject, Injectable } from '@angular/core';
import { Observable, catchError, EMPTY } from 'rxjs';
import { ENDPOINTS } from '../constants';
import { HttpClient } from '@angular/common/http';
import { SignUpRequest, SignUpResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #http = inject(HttpClient);

  createUserAccount(body: SignUpRequest): Observable<SignUpResponse>{
    return this.#http.post<SignUpResponse>(ENDPOINTS.AUTH.SIGN_UP, body).pipe(
      catchError(error => {
        console.log(error);
        return EMPTY
      })
    )
  }


}
