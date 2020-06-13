import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchModule } from './ui/search/search.module'
import {SearchComponent} from "./ui/search/search/search.component";
import {ArticleModule} from "./article/article.module";
import {AddArticleComponent} from "./article/components/add-article/add-article.component";


const routes: Routes = [
  { path: 'article/search', component:  SearchComponent },
  { path: 'article/create', component: AddArticleComponent},
  { path: '', redirectTo: '/article/search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SearchModule, ArticleModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
