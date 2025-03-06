import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app-constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAllProducts(theCategoryId: number): Observable<any> {
    return this.http.get<any>(`${AppConstants.BACKEND_API_URL}/${theCategoryId}`);
  }
}
