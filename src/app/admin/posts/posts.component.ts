import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts;
  constructor(private postsService: PostsService) {
    this.postsService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  ngOnInit(): void {}
}
