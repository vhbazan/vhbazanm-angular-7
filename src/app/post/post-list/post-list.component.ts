import { PostService } from '../post.service';
import { Component, OnInit } from '@angular/core';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  result: any;
  constructor(private readonly postService: PostService) { }

  ngOnInit() {

    this.postService.getAllPosts().subscribe( result => {
      this.result = result;
    },
    err => {
      console.log('ERROR', err);
    })

  }

}
