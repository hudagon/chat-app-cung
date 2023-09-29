import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getProduct(): Observable<any> {
    return this.httpClient.get<any>(environment.apiUrl + 'products');
  }

  create(newProduct: any): Observable<any> {
    console.log(newProduct);
    return this.httpClient.post<any>(environment.apiUrl + 'products', newProduct);
  }
}
