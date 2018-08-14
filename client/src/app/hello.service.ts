import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  public API = '//localhost:8080';
  public HELLO_API = this.API + '/greet';

  // constructor(){}

  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(this.HELLO_API);
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/hellos');
  }

  hello(): string {
    return 'Hello World Observable';
  }
}


