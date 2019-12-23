import { PostService } from './../post.service';
import { Post } from './../../shared/models/Post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  post: Post = {};

  constructor(private readonly postService: PostService) { }

  ngOnInit() {
  }

  savePost() {
    console.log('post being saved');
    const post: Post = {...this.post,
      id: '5544',
      tags: ['tag1', 'tag2'],
      createdBy: 'vhbazanm',
      createdAt: new Date()
    };
    console.log('post', post);

    this.postService.savePost(post).subscribe( response => {
      console.log('saved correctly', response);
    },
    err => {
      console.log('ERROR', err);
    });
  }

}
