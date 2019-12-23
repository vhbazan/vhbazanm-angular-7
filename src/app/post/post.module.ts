import { AuthGuardService } from './../shared/services/auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
  { path: 'post', component: PostListComponent, canActivate: [AuthGuardService]  },
  { path: 'post/new', component: NewPostComponent, canActivate: [AuthGuardService]  }
];

@NgModule({
  declarations: [PostListComponent, NewPostComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    PostListComponent,
    RouterModule
  ]

})
export class PostModule { }
