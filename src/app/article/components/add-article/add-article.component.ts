import {Component, OnInit} from '@angular/core';
import {Article} from "../../shared/article";
import {ArticlesService} from "../../shared/articles.service";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  constructor(private articlesService: ArticlesService) {
  }

  ngOnInit(): void {
  }

  handleCreatedArticle(article: Article) {
    this.articlesService.createArticle(article);
  }
}
