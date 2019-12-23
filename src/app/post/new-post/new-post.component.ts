import { Router } from '@angular/router';
import { PostService } from './../post.service';
import { Post } from './../../shared/models/Post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  post: Post;

  constructor(private readonly postService: PostService,
              private readonly route: Router) {
    this.post = {
      tags: []
    };
  }

  ngOnInit() {
  }

  savePost(event) {
    event.preventDefault();
    console.log('post being saved');
    const post: Post = {...this.post,
      createdBy: 'vhbazanm',
      createdAt: new Date()
    };
    console.log('post', post);

    this.postService.savePost(post).subscribe( response => {
      console.log('saved correctly', response);
      // ToDo: Display success message
      this.route.navigate(['/posts']);
    },
    err => {
      console.log('ERROR', err);
    });
  }

  addTag($event): void {
    this.post.tags.push($event.target.value);
    $event.target.value = '';
  }

}
