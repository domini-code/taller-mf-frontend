import { inject, Injectable } from '@angular/core';
import {  map, Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {
  private readonly API = 'https://fakestoreapi.com/products';
  private readonly _http = inject(HttpClient);

  public getProducts(): Observable<Product[]>{
    return this._http
      .get<Product[]>(this.API)
      .pipe(map((products) => products.sort(() => Math.random() - 0.5)));
  }

  public getProductById(id: number): Observable<Product> {
   return this._http.get<Product>(`${this.API}/${id}`);
  }

}

