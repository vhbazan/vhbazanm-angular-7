import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  postEndpoint = '/api/v1';
  headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user:x346_feder') ,
                              'Content-Type': 'application/json' });

  constructor(private readonly http: HttpClient) { }


getAllPosts(): Observable<any> {

  return this.http.get(`${this.postEndpoint}/post`, {headers: this.headers} )
  .pipe(
    map(
      response => {
        return response;
      }
    )
  );
}

}
