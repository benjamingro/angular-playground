import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

export type Product = {
  ProductName:string,
  Price:number,
  Price_unit:string,
  Instock:number,
  Instock_unit:number,
  Country:string,
  ImageUrl:string,
  Incart:number,
}; 

// export type ProductList = Product[];
export type ProductArray = Product[];

export type ProductListing = {ProductList : ProductArray};

export type GetAllProductsResponse = {data:ProductListing}; 


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  // public productList : Product[]; 
  constructor(
    private http: HttpClient
  ) { 
    // this.productList=[];
  }

  public getProductList():Observable<GetAllProductsResponse>{
    const search_url = `https://mit-xpro-319116.uc.r.appspot.com/graphql?query={ProductList{ProductName,Price,Price_unit,Instock,Instock_unit,Country,ImageUrl}}`;
    return this.http.get<GetAllProductsResponse>(search_url).pipe(
      catchError(error =>{return of(error);})
    ); 
  }

  public replenishStock():Observable<ProductArray>{
    const get_url = `https://mit-xpro-319116.uc.r.appspot.com/replenish`;
    return this.http.get<ProductArray>(get_url).pipe(
      catchError(error =>{return of(error);})
    ); 
  }

  public checkout(filteredProductArray:ProductArray):Observable<ProductArray>{
    const post_url = `https://mit-xpro-319116.uc.r.appspot.com/checkout`;
    return this.http.post<ProductArray>(post_url,filteredProductArray).pipe(
      catchError(error =>{return of(error);})
    );
  }

}
