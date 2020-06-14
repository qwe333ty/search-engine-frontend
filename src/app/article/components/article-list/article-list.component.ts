import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import {ArticlesService} from "../../shared/articles.service";
import {InternalArticle} from "../../shared/internal-article";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles$: Observable<InternalArticle[]>;
  private searchTerms = new Subject<string>();

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articles$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((searchValue: string) => this.articlesService.findArticles(searchValue)),
    );
  }

  onChangedSearch(searchValue: string) {
    this.searchTerms.next(searchValue);
  }
}
