import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private http: HttpClient) { }
  getNavigation() {
    return this.http.get('../assets/jsonData/menuNames.json');
  }
}
