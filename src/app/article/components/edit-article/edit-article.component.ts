import { Component, OnInit } from '@angular/core';
import {Article} from "../../shared/article";
import {ArticlesService} from "../../shared/articles.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  article: Article;

  private articleId: string;

  constructor(private articlesService: ArticlesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.articleId = params.get('id');
        return this.articlesService.findArticleById(this.articleId);
      })).subscribe(
        article => this.article = article
    );
  }

  updateArticle(entity: Article) {
    this.articlesService.updateArticle(this.articleId, entity).subscribe(
      response => this.router.navigate(['article', this.articleId, 'details'])
    );
  }
}
