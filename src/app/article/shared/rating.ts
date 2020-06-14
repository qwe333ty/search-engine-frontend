export class ArticleRating {

  private _articleId: string;
  private _userEstimation: number;

  get articleId(): string {
    return this._articleId;
  }

  set articleId(value: string) {
    this._articleId = value;
  }

  get userEstimation(): number {
    return this._userEstimation;
  }

  set userEstimation(value: number) {
    this._userEstimation = value;
  }
}
