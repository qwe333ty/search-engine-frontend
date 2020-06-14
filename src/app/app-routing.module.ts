import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchModule} from './ui/search/search.module'
import {ArticleModule} from "./article/article.module";
import {AddArticleComponent} from "./article/components/add-article/add-article.component";
import {NotFoundModule} from "./ui/not-found/not-found.module";
import {NotFoundComponent} from "./ui/not-found/not-found/not-found.component";
import {ArticleListComponent} from "./article/components/article-list/article-list.component";
import {ArticleDetailsComponent} from "./article/components/article-details/article-details.component";


const routes: Routes = [
  { path: 'article/:id/details', component: ArticleDetailsComponent },
  { path: 'article/search', component:  ArticleListComponent },
  { path: 'article/create', component: AddArticleComponent},
  { path: '', redirectTo: '/article/search', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SearchModule, ArticleModule, NotFoundModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
