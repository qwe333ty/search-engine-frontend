export class Article {

  public id: string;
  public header: string;
  public message: string;
  public originalDate: Date;
  public createdWhen: Date;
  public updatedWhen: Date;
  public rating: number;

  public toString = () : string => {
    return `SearchArticle (id=${this.id}, header=${this.header}, message=${this.message})`;
  }
}
