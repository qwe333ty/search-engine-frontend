import {Component, OnInit} from '@angular/core';
import {Article} from "../../shared/article";
import {ArticlesService} from "../../shared/articles.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  constructor(private articlesService: ArticlesService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  handleCreatedArticle(article: Article) {
    this.articlesService.createArticle(article).subscribe(
      response => this.router.navigate(['article', response.id, 'details'])
    );
  }
}
