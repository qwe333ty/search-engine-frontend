import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ArticleComponent } from './pages/article/article.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';



@NgModule({
  declarations: [ArticlesComponent, ArticleComponent, ArticleListComponent, ArticleDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class ArticleModule { }
