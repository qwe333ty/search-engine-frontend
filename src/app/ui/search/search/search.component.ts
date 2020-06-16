import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'arah-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onChangedSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  emitChangedSearchStringEvent(search: string) {
    this.onChangedSearch.emit(search);
  }

}
