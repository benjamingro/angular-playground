import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

export type article = {
  title? : string,
  url? : string,
  story_url? : string,
  story_title? : string,
}; 

export type hnResults = {
  hits : article[],
  nbHits? : number,
  page : number,
  nbPages : number,
  hitsPerPage? : number
}

// setHits(response.data.hits);
// setNbHits(response.data.nbHits);
// setPage(response.data.page);
// setNbPages(response.data.nbPages);
// setHitsPerPage(response.data.hitsPerPage);

@Injectable({
  providedIn: 'root'
})
export class HnServiceService {

  constructor(
    private http: HttpClient
  ) { }

  public searchHn(searchTerm:string, page:number = 1) : Observable<hnResults> {
    const search_url = `https://hn.algolia.com/api/v1/search?query=${searchTerm}&page=${page}`;
    return this.http.get<hnResults>(search_url).pipe(
      catchError(error =>{return of(error);})
    ); 
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  
  //     // TODO: send the error to remote logging infrastructure
  //     // console.error(error); // log to console instead
  
  //     // TODO: better job of transforming error for user consumption
  //     // this.log(`${operation} failed: ${error.message}`);
  
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

}
