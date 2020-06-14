import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {ArticlesService} from "../../shared/articles.service";
import {Observable} from "rxjs";
import {Article} from "../../shared/article";
import {RatingService} from "../../shared/rating.service";
import {ArticleRating} from "../../shared/rating";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  originalArticle$: Observable<Article>;

  estimationValue: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private articlesService: ArticlesService,
              private ratingService: RatingService) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.originalArticle$ = this.articlesService.findArticleById(id.toString());
    }
  }

  onRate() {
    let articleRating = new ArticleRating();

    const id = +this.route.snapshot.paramMap.get('id');
    articleRating.articleId = id.toString();
    articleRating.userEstimation = this.estimationValue;

    this.ratingService.rateArticle(articleRating).subscribe(newRating => {
      this.originalArticle$.subscribe(article => {
        article.rating = newRating
      });
    });
  }

  onEdit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.router.navigate([`/article/${id}/edit`]);
  }

  onDelete() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articlesService.deleteArticle(id.toString());
    this.router.navigate(['/article/search']);
  }
}
