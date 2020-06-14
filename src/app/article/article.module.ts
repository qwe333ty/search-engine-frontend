import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {SearchModule} from "../ui/search/search.module";
import {MatExpansionModule} from '@angular/material/expansion';
import {RouterModule} from "@angular/router";
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {StepperModule} from "../ui/stepper/stepper.module";
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ArticleListComponent, ArticleDetailsComponent, AddArticleComponent, EditArticleComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    SearchModule,
    MatExpansionModule,
    RouterModule,
    MatCardModule,
    MatDividerModule,
    StepperModule,
    FormsModule
  ],
  exports: [
    AddArticleComponent
  ],
  providers: [
  ]
})
export class ArticleModule { }
