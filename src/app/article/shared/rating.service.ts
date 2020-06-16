import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ArticleRating} from "./rating";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {Article} from "./article";

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private recalculateUrn: string = 'api/v1/rating/recalculate'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  rateArticle(rating: ArticleRating): Observable<Article> {
    return this.http.post<Article>(this.recalculateUrn, rating, this.httpOptions).pipe(
      catchError(this.handleError('Rate Article', null))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }
}
