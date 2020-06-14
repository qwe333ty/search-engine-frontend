import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
