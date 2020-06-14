import {Article} from "./article";

export class InternalArticle extends Article {

  private _openedPanel: boolean = false;

  get openedPanel(): boolean {
    return this._openedPanel;
  }

  set openedPanel(value: boolean) {
    this._openedPanel = value;
  }
}
