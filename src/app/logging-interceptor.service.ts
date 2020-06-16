import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {Observable} from "rxjs"; // fancy pipe-able operators

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        response => console.log(`OK. Request: ${request.method} ${request.url} Body: ${request.body}\nResponse: ${response.type}`),
        error => console.log(`ERROR. Request: ${request.method} ${request.url} Body: ${request.body}\nError: ${error}`)
      ));
  }
}
