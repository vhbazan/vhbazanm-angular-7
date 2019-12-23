import { Post } from './../../shared/models/Post';
import { PostService } from '../post.service';
import { Component, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList: Post[];
  constructor(private readonly postService: PostService) { }

  ngOnInit() {

    this.postService.getAllPosts().subscribe( result => {
      console.log('result', result);
      this.postList = result.content;
    },
    err => {
      console.log('ERROR', err);
    });

  }

}
