import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Article} from "../../../article/shared/article";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'arah-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  headerFormGroup: FormGroup;
  messageFormGroup: FormGroup;
  dateFormGroup: FormGroup;

  serializedDate = new FormControl((new Date()).toISOString());

  @Output()
  onArticleCreated = new EventEmitter<Article>();

  articleData$ = new BehaviorSubject<Article>(null);

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.headerFormGroup = this._formBuilder.group({
      headerCtrl: ['', Validators.required]
    });
    this.messageFormGroup = this._formBuilder.group({
      messageCtrl: ['', Validators.required]
    });
    this.dateFormGroup = this._formBuilder.group({
      dateCtrl: this.serializedDate
    });
    this.articleData$.subscribe(article => {
      if (article != null) {
        this.headerFormGroup.get('headerCtrl').setValue(article.header);
        this.messageFormGroup.get('messageCtrl').setValue(article.message);
        this.dateFormGroup.get('dateCtrl').setValue(article.originalDate);
      }
    })
  }

  private get header(): string {
    return this.headerFormGroup.get('headerCtrl').value;
  }

  private get message(): string {
    return this.messageFormGroup.get('messageCtrl').value;
  }

  private get originalDate(): Date {
    return this.dateFormGroup.get('dateCtrl').value;
  }

  get article(): Article {
    let article = new Article();
    article.header = this.header;
    article.message = this.message;
    article.originalDate = this.originalDate;
    return article;
  }

  articleCreated() {
    this.onArticleCreated.emit(this.article);
  }

  @Input()
  set article(a: Article) {
    this.articleData$.next(a);
  }
}
