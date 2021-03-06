import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Article} from "./article";
import { catchError } from 'rxjs/operators';
import {InternalArticle} from "./internal-article";
import {SearchArticle} from "./search-article";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private articleUrn: string = 'api/v1/article'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
              private datePipe: DatePipe) { }

  //TODO: remove stubs
  findArticles(searchValue: string): Observable<InternalArticle[]> {
/*    let article1 = new InternalArticle();
    article1.id = '1123';
    article1.header = 'Bicycle';
    article1.message = 'Message dhAlkfj   ALS l NDflANDf lzxc ml ldz.. lszdl ;zlc vz;l klskd ;lz:L xsd l;L DKfl;k zll D:F';
    article1.rating = 5.3;
    article1.originalDate = new Date();
    article1.updatedWhen = new Date();
    article1.createdWhen = new Date();

    let article2 = new InternalArticle();
    article2.id = '1124';
    article2.header = 'Bicycle';
    article2.message = 'Message dhAlkfj   ALS l NDflANDf lzxc ml ldz.. lszdl ;zlc vz;l klskd ;lz:L xsd l;L DKfl;k zll D:F';
    article2.rating = 5.3;
    article2.originalDate = new Date();
    article2.updatedWhen = new Date();
    article2.createdWhen = new Date();
    return of([article1, article2]);*/
    let searchArticle = new SearchArticle();
    searchArticle.searchText = searchValue;

    const urn = `${this.articleUrn}/search`;
    return this.http.post<InternalArticle[]>(urn, searchArticle, this.httpOptions).pipe(
      catchError(this.handleError<InternalArticle[]>('Find Articles', []))
    );
  }

  findArticleById(articleId: string): Observable<Article> {
/*    let article1 = new InternalArticle();
    article1.id = '1123';
    article1.header = 'Bicycle';
    article1.message = 'Message dhAlkfj   ALS l NDflANDf lzxc ml ldz.. lszdl ;zlc vz;l klskd ;lz:L xsd l;L DKfl;k zll D:F';
    article1.rating = 5.3;
    article1.originalDate = new Date();
    article1.updatedWhen = new Date();
    article1.createdWhen = new Date();
    return of(article1);*/
    const urn = `${this.articleUrn}/${articleId}`;
    return this.http.get<Article>(urn).pipe(
      catchError(this.handleError<Article>('Get Article by Id', null))
    );
  }

  createArticle(entity: Article): Observable<Article> {
    return this.http.post<Article>(this.articleUrn, entity, this.httpOptions).pipe(
      catchError(this.handleError<Article>('Create Article', null))
    );
  }

  updateArticle(id: string, entity: Article): Observable<Article> {
    //return of(entity);
    const urn = `${this.articleUrn}/${id}`;
    return this.http.put<Article>(urn, entity, this.httpOptions).pipe(
      catchError(this.handleError<Article>('Update Article', null))
    );
  }

  deleteArticle(articleId: string): void {
    const urn = `${this.articleUrn}/${articleId}`;
    this.http.delete<any>(urn).subscribe(catchError(this.handleError<any>('Delete Article By Id')));
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
