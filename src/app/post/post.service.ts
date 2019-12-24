import { Post } from './../shared/models/Post';
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

  getPostById(id: string): Observable<Post> {
    return this.http.get(`${this.postEndpoint}/post/${id}`, {headers: this.headers})
    .pipe(
      map(
        response => {
          console.log('response', response);
          return response;
        }
      )
    );
  }

  savePost(newPost: Post): Observable<Post> {
    return this.http.post<Post>(`${this.postEndpoint}/post`, newPost, {headers: this.headers})
      .pipe(
        map(response => {
          console.log('response', response);
          return response;
        })
      );
  }

  deletePost(id: string): Observable<Post> {
    return this.http.delete(`${this.postEndpoint}/post/${id}`, {headers: this.headers})
    .pipe(
      map(
        response => {
          return response;
        }
      )
    );
  }
}
