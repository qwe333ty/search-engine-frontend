import { Component, OnInit } from '@angular/core';
import {Article} from "../../shared/article";
import {ArticlesService} from "../../shared/articles.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  article: Article;

  constructor(private articlesService: ArticlesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id == null) {
      return;
    }
    this.articlesService.findArticleById(id.toString()).subscribe(
      article => this.article = article
    );
  }

  updateArticle(entity: Article) {
    const id = +this.route.snapshot.paramMap.get('id');
    entity.id = id.toString();
    this.articlesService.updateArticle(entity);
    this.router.navigate([`/article/${id}/details`]);
  }
}
