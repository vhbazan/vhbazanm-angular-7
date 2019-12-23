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
      this.postList = result.content;
    },
    err => {
      console.log('ERROR', err);
    });

  }

  deletePost(id: string): void {
    this.postService.deletePost(id).subscribe(
      response => {
        this.postList = this.postList.filter(postItem => {
          return postItem.id !== id;
        });
      },
      err => {
        console.log('ERROR:', err);
      }
    );
  }

}
