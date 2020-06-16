export class SearchArticle {
  public searchText: string;

  public toString = () : string => {
    return `SearchArticle (searchText=${this.searchText})`;
  }
}
