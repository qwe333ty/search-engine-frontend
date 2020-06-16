import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ArticlesService} from "../../shared/articles.service";
import {Observable} from "rxjs";
import {Article} from "../../shared/article";
import {RatingService} from "../../shared/rating.service";
import {ArticleRating} from "../../shared/rating";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  originalArticle$: Observable<Article>;

  estimationValue: number;

  private articleId: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private articlesService: ArticlesService,
              private ratingService: RatingService) { }

  ngOnInit(): void {
    this.originalArticle$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.articleId = params.get('id');
        return this.articlesService.findArticleById(this.articleId);
      })
    );
  }

  onRate() {
    let articleRating = new ArticleRating();

    articleRating.articleId = this.articleId;
    articleRating.userEstimation = this.estimationValue;

    this.originalArticle$ = this.ratingService.rateArticle(articleRating);
  }

  onEdit() {
    this.router.navigate(['article', this.articleId, 'edit']);
  }

  onDelete() {
    this.articlesService.deleteArticle(this.articleId);
    this.router.navigate(['/article/search']);
  }
}
