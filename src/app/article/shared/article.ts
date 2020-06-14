export class Article {

  private _id: string
  private _header: string;
  private _message: string;
  private _originalDate: Date;
  private _createdWhen: Date;
  private _updatedWhen: Date;
  private _rating: number;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get header(): string {
    return this._header;
  }

  set header(value: string) {
    this._header = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get originalDate(): Date {
    return this._originalDate;
  }

  set originalDate(value: Date) {
    this._originalDate = value;
  }

  get createdWhen(): Date {
    return this._createdWhen;
  }

  set createdWhen(value: Date) {
    this._createdWhen = value;
  }

  get updatedWhen(): Date {
    return this._updatedWhen;
  }

  set updatedWhen(value: Date) {
    this._updatedWhen = value;
  }

  get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value;
  }
}
