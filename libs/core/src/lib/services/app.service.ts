import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // Simulate API call for app config
  getAppConfig() {
    return of({ theme: 'light', version: '1.0.0' });
  }

  // Simulate API call for user session
  getUserSession() {
    return of({ id: 1, name: 'Shreyas' });
  }

}
