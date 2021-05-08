import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';


import {Post} from '../post'
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.posts = this.postService.getPosts()
    console.log(this)
  }

}
