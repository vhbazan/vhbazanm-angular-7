import { Post } from './../../shared/models/Post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  post: Post = {};

  constructor() { }

  ngOnInit() {
  }

  savePost() {
    console.log('post being saved');
  }

}
