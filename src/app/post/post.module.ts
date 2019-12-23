import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: 'post', component: PostListComponent }
];

@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    PostListComponent
  ]

})
export class PostModule { }
