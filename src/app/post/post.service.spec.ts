import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';

describe('PostServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostService = TestBed.get(PostService);
    expect(service).toBeTruthy();
  });
});
