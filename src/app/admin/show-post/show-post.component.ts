import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  post;
  constructor(private activatedRoute : ActivatedRoute , private postsService  : PostsService) {
    let id = this.activatedRoute.snapshot.params.id;
    this.postsService.getPost(id).subscribe(data=>{
      this.post = data;
    })
  }

  ngOnInit(): void {
  }

}
