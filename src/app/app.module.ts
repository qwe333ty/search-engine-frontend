import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ClassProvider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from './ui/search/search.module'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {HttpClientModule} from "@angular/common/http";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {LoggingInterceptor} from "./logging-interceptor.service";
import {DatePipe, DecimalPipe} from "@angular/common";

const LOGGING_INTERCEPTOR_PROVIDER: ClassProvider = {
  provide: HTTP_INTERCEPTORS ,
  useClass: LoggingInterceptor,
  multi: true
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SearchModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    HttpClientModule
  ],
  providers: [
    LOGGING_INTERCEPTOR_PROVIDER,
    DatePipe,
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
