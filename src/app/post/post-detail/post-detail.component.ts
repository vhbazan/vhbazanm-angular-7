import { Post } from './../../shared/models/Post';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  POST_ID_KEY = 'id';
  post: Post; 
  constructor(private readonly route: ActivatedRoute,
              private readonly postService: PostService ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postService.getPostById(params[this.POST_ID_KEY]).subscribe(
        response => {
          this.post = response;
        },
        err => {
          console.log('ERROR', err);
        }
      );
    });
  }

}
