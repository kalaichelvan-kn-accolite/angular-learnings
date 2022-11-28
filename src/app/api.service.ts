import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getComments(): Observable<any> {
    return this.http.get('https://gorest.co.in/public/v2/comments');
  }

  public getPosts(): Observable<any> {
    return this.http.get('https://gorest.co.in/public/v2/posts');
  }

  public getAccount(id): Observable<any> {
    return this.http.get(`https://gorest.co.in/public/v2/users/${id}`);
  }
}
