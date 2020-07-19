import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post;
  constructor(private activatedRoute : ActivatedRoute ,private postsService : PostsService) {
    let id = this.activatedRoute.snapshot.params.id;
    this.postsService.getPost(id).subscribe(data=>{
      this.post = data;
    })
   }

  ngOnInit(): void {
  }

}
